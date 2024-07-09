import TransactionsTable from '@/components/TransactionsTable';
import { TransactionsTablePagination } from '@/components/TransactionsTablePagination';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

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
        <div className='no-scrollbar bg-[#F5F7FA] flex w-full flex-col gap-8 px-6 xl:px-10 py-5'>
            <div className='w-full !rounded-[20px] bg-white backdrop-blur-[6px] px-7 pt-5 pb-7'>
                <TransactionsTable
                    transactions={currentTransactions}
                />
            </div>

            {totalPages > 1 && (
                <div className='my-4 w-full'>
                    <TransactionsTablePagination
                        totalPages={totalPages}
                        page={currentPage}
                    />
                </div>

            )}
        </div>
    )
}

export default Transactions