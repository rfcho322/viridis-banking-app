import BankCardWidget from '@/components/BankCardWidget'
import TotalBalanceChart from '@/components/TotalBalanceChart'
import TransactionsTable from '@/components/TransactionsTable'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Dashboard = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const currentPage = Number(page as string) || 1
    const loggedIn = await getLoggedInUser()
    const accounts = await getAccounts({ userId: loggedIn.$id })

    if (!accounts) return

    const accountsData = accounts?.data
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId

    const account = await getAccount({ appwriteItemId })

    console.log({
        accountsData,
        account
    })

    return (
        <section className='no-scrollbar bg-[#F5F7FA] flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll'>
            <div className='no-scrollbar flex w-full flex-col gap-8 px-6 xl:px-10 py-5 xl:max-h-screen xl:overflow-y-scroll'>
                <div className='grid grid-cols-3 gap-7'>
                    <div className='col-span-3 md:col-span-2 flex flex-col gap-5'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[22px] font-semibold'>My Cards</h2>
                            <p className='text-[17px] font-semibold'>See All</p>
                        </div>
                        <BankCardWidget
                            user={loggedIn}
                            banks={accountsData?.slice(0, 2)}
                        />
                    </div>
                    {/* TODO RECENT TRANSACTIONS TABLE AND DONUT CHART */}
                    <TotalBalanceChart
                        accounts={accountsData}
                        totalBanks={accounts?.totalBanks}
                        totalCurrentBalance={accounts?.totalCurrentBalance}
                    />

                    <div className='col-span-3 md:col-span-2 flex flex-col gap-5'>
                        <div className='flex items-center justify-between'>
                            <p className='text-[22px] font-semibold'>Recent Transactions</p>
                            <p className='text-[17px] font-semibold'>See All</p>
                        </div>
                        <div>
                            Tabs here
                        </div>
                        <div className='relative h-[170px] w-full rounded-[20px] bg-white backdrop-blur-[6px]'>
                            <TransactionsTable />
                        </div>
                    </div>

                    <div className='col-span-3 md:col-span-1 flex flex-col gap-5'>
                        <div className='flex items-center justify-between'>
                            <p className='text-[22px] font-semibold'>Top Categories</p>
                        </div>
                        <div className='relative flex items-center h-[170px] xl:h-[235px] w-full  rounded-[20px] bg-white backdrop-blur-[6px]'>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard