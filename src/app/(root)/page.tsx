import BankCardWidget from '@/components/BankCardWidget'
import TotalBalanceChart from '@/components/TotalBalanceChart'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'
import RecentTransactions from '@/components/RecentTransactions'
import { countTransactionCategories } from '@/lib/utils'
import Category from '@/components/Category'
import Link from 'next/link'


const Dashboard = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const currentPage = Number(page as string) || 1
    const loggedIn = await getLoggedInUser()
    const accounts = await getAccounts({ userId: loggedIn.$id })

    if (!accounts) return

    const accountsData = accounts?.data
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId

    const account = await getAccount({ appwriteItemId })

    const categories: CategoryCount[] = countTransactionCategories(account?.transactions)

    console.log({
        accountsData,
        account
    })

    return (
        <section className='no-scrollbar flex w-full flex-row'>
            <div className='no-scrollbar flex w-full flex-col gap-8 px-6 xl:px-10 py-5'>
                <div className='grid grid-cols-3 gap-7'>
                    <div className='col-span-3 md:col-span-2 flex flex-col gap-5'>
                        <div className='flex items-center justify-between text-[#343C6A]'>
                            <h2 className='text-[22px] font-semibold'>My Cards</h2>
                            <Link
                                href="/credit-cards"
                                className='text-[17px] font-semibold no-underline'
                            >
                                {/* <p className='text-[17px] font-semibold'>See All</p> */}
                                See All
                            </Link>
                        </div>
                        <BankCardWidget
                            user={loggedIn}
                            banks={accountsData?.slice(0, 2)}
                        />
                    </div>

                    <TotalBalanceChart
                        accounts={accountsData}
                        totalBanks={accounts?.totalBanks}
                        totalCurrentBalance={accounts?.totalCurrentBalance}
                    />
                </div>

                <div className='grid grid-cols-3 gap-7'>
                    <div className='col-span-3 md:col-span-2 flex flex-col gap-5'>
                        <RecentTransactions
                            accounts={accountsData}
                            transactions={account?.transactions}
                            appwriteItemId={appwriteItemId}
                            page={currentPage}
                        />
                    </div>

                    <div className='col-span-3 md:col-span-1 flex flex-col gap-5'>
                        <div className='flex items-center justify-between text-[#343C6A]'>
                            <p className='text-[22px] font-semibold'>Top Categories</p>
                        </div>
                        <div className='flex flex-col min-h-[170px] px-2 py-2 xl:min-h-[235px] w-full rounded-[20px] bg-white backdrop-blur-[6px]'>
                            {categories.map((category, index) => (
                                <Category
                                    key={category.name}
                                    category={category}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard