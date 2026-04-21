import React from 'react'
import TransactionsTable from '@/components/TransactionsTable'
import Link from 'next/link'

const RecentTransactions = ({
    transactions = [],
    page = 1,
}: RecentTransactionsProps) => {

    const rowsPerPage = 7
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
            <div className='relative w-full rounded-[20px] bg-white backdrop-blur-[6px] px-6 py-4'>
                {currentTransaction.length > 0 ? (
                    <TransactionsTable transactions={currentTransaction} />
                ) : (
                    <div className='flex flex-col items-center justify-center py-10 text-center'>
                        <p className='text-base font-medium text-[#344054]'>No transactions yet</p>
                        <p className='mt-1 text-sm text-[#718EBF]'>Linked accounts with activity will show here.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default RecentTransactions
