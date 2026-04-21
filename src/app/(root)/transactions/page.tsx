import React from 'react'
import TransactionsTable from '@/components/TransactionsTable';
import { TransactionsTablePagination } from '@/components/TransactionsTablePagination';
import TransactionsSearchBar from '@/components/TransactionsSearchBar';
import AccountSelectDropdown from '@/components/AccountSelectDropdown';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const Transactions = async ({ searchParams: { id, page, search } }: SearchParamProps) => {

    const currentPage = Number(page as string) || 1
    const searchQuery = (search as string) || ''
    const loggedIn = await getLoggedInUser();

    if (!loggedIn) redirect('/sign-in')

    const accounts = await getAccounts({ userId: loggedIn.$id })

    if (!accounts) return

    const accountsData = accounts?.data
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId

    const account = await getAccount({ appwriteItemId })

    const rowsPerPage = 10;

    const normalizeStr = (str: string) => str.toLowerCase().replace(/[^\w\s]/gi, '')

    const filteredTransactions = searchQuery
        ? account?.transactions.filter((t: Transaction) =>
            normalizeStr(t.name).includes(normalizeStr(searchQuery)) ||
            normalizeStr(t.category).includes(normalizeStr(searchQuery)) ||
            normalizeStr(t.paymentChannel).includes(normalizeStr(searchQuery))
        )
        : account?.transactions

    const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage);

    // Guard against stale ?page=N when filtering reduces the result below N pages.
    const safePage = totalPages > 0 && currentPage > totalPages ? 1 : currentPage
    const indexOfLastTransaction = safePage * rowsPerPage
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage

    const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    return (
        <section className='no-scrollbar flex w-full flex-col gap-7 px-6 xl:px-10 py-5'>
            <div>
                <div className='flex items-center justify-between mb-6'>
                    <TransactionsSearchBar />
                    <AccountSelectDropdown accounts={accountsData} selectedId={appwriteItemId} />
                </div>

                <div className='relative w-full rounded-[20px] bg-white backdrop-blur-[6px] px-6 py-4'>
                    {currentTransactions.length > 0 ? (
                        <TransactionsTable transactions={currentTransactions} />
                    ) : (
                        <div className='flex flex-col items-center justify-center py-16 text-center'>
                            <p className='text-base font-medium text-[#344054]'>
                                {searchQuery ? 'No transactions match your search' : 'No transactions yet'}
                            </p>
                            <p className='mt-1 text-sm text-[#718EBF]'>
                                {searchQuery
                                    ? 'Try a different keyword or clear the search.'
                                    : 'Linked accounts with activity will show here.'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {totalPages > 1 && (
                <div className='my-4 w-full'>
                    <TransactionsTablePagination
                        totalPages={totalPages}
                        page={safePage}
                    />
                </div>
            )}
        </section>
    )
}

export default Transactions
