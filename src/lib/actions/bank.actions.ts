"use server";

import { CountryCode } from "plaid";
import { unstable_cache } from "next/cache";

import { plaidClient } from "../plaid";
import { parseStringify } from "../utils";

import { getBanks, getBank } from "./user.actions";
import { getTransactionsByBankId } from "./transaction.actions";

// GET MULTIPLE BANKS FROM DB
// FIX 3: unstable_cache wraps the inner async function.
// - The second arg (['get-accounts']) is the key prefix.
// - Next.js appends the function's runtime arguments (userId) to form the full
//   cache key, so each user gets their own isolated cache entry.
// - revalidate: 60 means the cache entry expires after 60 seconds.
// - tags: ['accounts'] lets us manually bust this cache via revalidateTag()
//   when the user connects a new bank (see exchangePublicToken in user.actions.ts).
const fetchAccounts = unstable_cache(
  async (userId: string) => {
    try {
      const banks = await getBanks({ userId });

      const accounts = await Promise.all(
        banks?.map(async (bank: Bank) => {
          const accountsResponse = await plaidClient.accountsGet({
            access_token: bank.accessToken,
          });
          const accountData = accountsResponse.data.accounts[0];

          const institution = await getInstitution({
            institutionId: accountsResponse.data.item.institution_id!,
          });

          return {
            id: accountData.account_id,
            availableBalance: accountData.balances.available!,
            currentBalance: accountData.balances.current!,
            institutionId: institution.institution_id,
            name: accountData.name,
            officialName: accountData.official_name,
            mask: accountData.mask!,
            type: accountData.type as string,
            subtype: accountData.subtype! as string,
            appwriteItemId: bank.$id,
            shareableId: bank.shareableId,
          };
        })
      );

      const totalBanks = accounts.length;
      const totalCurrentBalance = accounts.reduce((total, account) => {
        return total + account.currentBalance;
      }, 0);

      return parseStringify({ data: accounts, totalBanks, totalCurrentBalance });
    } catch (error) {
      console.error("An error occurred while getting the accounts:", error);
    }
  },
  ["get-accounts"],
  { revalidate: 60, tags: ["accounts"] }
);

// Thin wrapper so callers keep the same { userId } interface.
export const getAccounts = ({ userId }: getAccountsProps) =>
  fetchAccounts(userId);

// GET ONE BANK ACCOUNT
// FIX 3: Same caching pattern as fetchAccounts above.
// Each unique appwriteItemId gets its own cache entry.
// Pagination (page 1 → page 2) re-uses the same cached result and just
// slices a different window on the transactions array in the page component.
const fetchAccount = unstable_cache(
  async (appwriteItemId: string) => {
    try {
      const bank = await getBank({ documentId: appwriteItemId });

      // FIX 2: Fire all three calls in parallel — they only need `bank` data,
      // which we already have. Previously these ran one after another:
      //   accountsGet → (wait) → getTransactionsByBankId → (wait) → getTransactions
      // Now they all start at the same time and we wait for all three together.
      const [accountsResponse, transferTransactionsData, transactions] =
        await Promise.all([
          plaidClient.accountsGet({ access_token: bank.accessToken }),
          getTransactionsByBankId({ bankId: bank.$id }),
          getTransactions({ accessToken: bank.accessToken }),
        ]);

      const accountData = accountsResponse.data.accounts[0];

      // GET INSTITUTION INFO FROM PLAID
      // This still runs after accountsGet because it needs institution_id from
      // the response above. But it now overlaps with the two transaction fetches.
      const institution = await getInstitution({
        institutionId: accountsResponse.data.item.institution_id!,
      });

      const transferTransactions = transferTransactionsData.documents.map(
        (transferData: Transaction) => ({
          id: transferData.$id,
          name: transferData.name!,
          amount: transferData.amount!,
          date: transferData.$createdAt,
          paymentChannel: transferData.channel,
          category: transferData.category,
          type: transferData.senderBankId === bank.$id ? "debit" : "credit",
        })
      );

      const account = {
        id: accountData.account_id,
        availableBalance: accountData.balances.available!,
        currentBalance: accountData.balances.current!,
        institutionId: institution.institution_id,
        name: accountData.name,
        officialName: accountData.official_name,
        mask: accountData.mask!,
        type: accountData.type as string,
        subtype: accountData.subtype! as string,
        appwriteItemId: bank.$id,
      };

      // SORT TRANSACTIONS BY date SUCH THAT THE MOST TRANSACTION COMES FIRST
      const allTransactions = [...transactions, ...transferTransactions].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      return parseStringify({
        data: account,
        transactions: allTransactions,
      });
    } catch (error) {
      console.error("An error occurred while getting the account:", error);
    }
  },
  ["get-account"],
  { revalidate: 60, tags: ["accounts"] }
);

// Thin wrapper so callers keep the same { appwriteItemId } interface.
export const getAccount = ({ appwriteItemId }: getAccountProps) =>
  fetchAccount(appwriteItemId);

// GET BANK INFO
export const getInstitution = async ({
  institutionId,
}: getInstitutionProps) => {
  try {
    const institutionResponse = await plaidClient.institutionsGetById({
      institution_id: institutionId,
      country_codes: ["US"] as CountryCode[],
    });

    const intitution = institutionResponse.data.institution;

    return parseStringify(intitution);
  } catch (error) {
    console.error("An error occurred while getting the accounts:", error);
  }
};

// GET RECENT TRANSACTIONS ACROSS ALL CONNECTED BANKS (for notifications)
export const getRecentTransactionsAllBanks = async (userId: string) => {
  const accountsData = await getAccounts({ userId });
  if (!accountsData?.data) return [];

  const results = await Promise.all(
    accountsData.data.map(async (account: Account) => {
      const accountData = await getAccount({
        appwriteItemId: account.appwriteItemId,
      });
      return {
        accountName: account.name,
        appwriteItemId: account.appwriteItemId,
        transactions: (accountData?.transactions || []).slice(0, 3),
      };
    })
  );

  return parseStringify(results);
};

// GET TRANSACTIONS
export const getTransactions = async ({
  accessToken,
}: getTransactionsProps) => {
  let hasMore = true;
  let transactions: any = [];
  // FIX 1: Track the cursor so each loop iteration fetches the NEXT page,
  // not the same first page over and over (which caused an infinite loop).
  let cursor: string | undefined = undefined;

  try {
    // ITERATE THROUGH EACH PAGE OF NEW TRANSACTION UPDATES FOR ITEM
    while (hasMore) {
      const response = await plaidClient.transactionsSync({
        access_token: accessToken,
        // FIX 1: Pass cursor on every call after the first.
        // Plaid uses this to know where the previous page ended.
        cursor,
      });

      const data = response.data;

      // FIX 1: Spread-accumulate instead of overwriting.
      // Previously `transactions = data.added.map(...)` wiped previous pages.
      transactions = [
        ...transactions,
        ...data.added.map((transaction) => ({
          id: transaction.transaction_id,
          name: transaction.name,
          paymentChannel: transaction.payment_channel,
          type: transaction.payment_channel,
          accountId: transaction.account_id,
          amount: transaction.amount,
          pending: transaction.pending,
          // CATEGORY IS DEPRECATED WE CAN USE personal_finance_category
          category: transaction.personal_finance_category
            ? transaction.personal_finance_category.primary
            : "",
          date: transaction.date,
          image: transaction.logo_url,
        })),
      ];

      hasMore = data.has_more;
      // FIX 1: Advance the cursor to the next page position.
      // Without this, `hasMore` can be true but we'd re-fetch page 1 forever.
      cursor = data.next_cursor;
    }

    return parseStringify(transactions);
  } catch (error) {
    console.error("An error occurred while getting the accounts:", error);
  }
};
