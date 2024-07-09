import React from 'react'
import TransactionsTable from '@/components/TransactionsTable'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BankTabItem from './BankTabItem'

const RecentTransactions = ({
    accounts,
    transactions = [],
    appwriteItemId,
    page = 1,
}: RecentTransactionsProps) => {

    const rowsPerPage = 5
    const totalPages = Math.ceil(transactions.length / rowsPerPage)

    const indexOfLastTransaction = page * rowsPerPage
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage

    const currentTransaction = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)

    return (
        <>
            <div className='flex items-center justify-between text-[#343C6A]'>
                <p className='text-[22px] font-semibold'>Recent Transactions</p>
                <p className='text-[17px] font-semibold'>See All</p>
            </div>
            <div>
                <Tabs defaultValue={appwriteItemId} className="">
                    <TabsList className='custom-scrollbar flex gap-3 justify-start mb-6 !bg-transparent flex-nowrap'>
                        {accounts.map((account: Account) => (
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
                    {accounts.map((account: Account) => (
                        <TabsContent
                            key={account.id}
                            value={account.appwriteItemId}
                            className='space-y-4'
                        >
                            <div className='relative w-full rounded-[20px] bg-white backdrop-blur-[6px]'>
                                <TransactionsTable
                                    transactions={currentTransaction}
                                />
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

            </div >
            {/* <div className='relative h-[170px] w-full rounded-[20px] bg-white backdrop-blur-[6px]'>
                <TransactionsTable />
            </div> */}
        </>
    )
}

export default RecentTransactions