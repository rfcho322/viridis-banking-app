import React from 'react'
import TransactionsTable from '@/components/TransactionsTable'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BankTabItem from './BankTabItem'
import Link from 'next/link'

const RecentTransactions = ({
    accounts,
    transactions = [],
    appwriteItemId,
    page = 1,
}: RecentTransactionsProps) => {

    const rowsPerPage = 5

    const indexOfLastTransaction = page * rowsPerPage
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage

    const currentTransaction = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)

    return (
        <>
            <div className='flex items-center justify-between text-[#343C6A]'>
                <p className='text-[22px] font-semibold'>Recent Transactions</p>
                <Link
                    href='/transactions'
                    className='text-[17px] font-semibold no-underline'>
                    See All
                </Link>
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
                            <div className='relative w-full rounded-[20px] bg-white backdrop-blur-[6px] px-6 py-4'>
                                <TransactionsTable
                                    transactions={currentTransaction}
                                />
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

            </div >
        </>
    )
}

export default RecentTransactions