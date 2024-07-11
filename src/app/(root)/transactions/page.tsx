import React from 'react'
import TransactionsTable from '@/components/TransactionsTable';
import { TransactionsTablePagination } from '@/components/TransactionsTablePagination';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BankTabItem from '@/components/BankTabItem';

const Transactions = async ({ searchParams: { id, page } }: SearchParamProps) => {

    const currentPage = Number(page as string) || 1
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({ userId: loggedIn.$id })

    if (!accounts) return

    const accountsData = accounts?.data
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId

    const account = await getAccount({ appwriteItemId })

    const rowsPerPage = 10;
    const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);

    const indexOfLastTransaction = currentPage * rowsPerPage
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage

    const currentTransactions = account?.transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);


    return (
        <section className='no-scrollbar flex w-full flex-col gap-7 px-6 xl:px-10 py-5'>
            <div className='flex items-center justify-between text-[#343C6A]'>
                <p className='text-[22px] font-semibold'>Recent Transactions</p>
            </div>

            <Tabs defaultValue={appwriteItemId} className="">
                <TabsList className='custom-scrollbar flex gap-3 justify-start mb-6 !bg-transparent flex-nowrap'>
                    {accountsData.map((account: Account) => (
                        <TabsTrigger
                            key={account.id}
                            value={account.appwriteItemId}
                        >
                            <BankTabItem
                                key={account.id}
                                account={account}
                                appwriteItemId={appwriteItemId}
                            />
                        </TabsTrigger>
                    ))}
                </TabsList>
                {accountsData.map((account: Account) => (
                    <TabsContent
                        key={account.id}
                        value={account.appwriteItemId}
                        className='space-y-4'
                    >
                        <div className='relative w-full rounded-[20px] bg-white backdrop-blur-[6px] px-6 py-4'>
                            <TransactionsTable
                                transactions={currentTransactions}
                            />
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            {totalPages > 1 && (
                <div className='my-4 w-full'>
                    <TransactionsTablePagination
                        totalPages={totalPages}
                        page={currentPage}
                    />
                </div>

            )}
        </section>
    )
}

export default Transactions