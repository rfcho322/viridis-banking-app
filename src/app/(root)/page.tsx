import BankCard from '@/components/BankCard'
import TotalBalanceChart from '@/components/TotalBalanceChart'
import TransactionsTable from '@/components/TransactionsTable'
import MasterCardLogo from '@/components/icons/master-card-logo'
import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
    return (
        <section className='no-scrollbar bg-[#F5F7FA] flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll'>
            <div className='no-scrollbar flex w-full flex-col gap-8 px-6 xl:px-10 py-5 xl:max-h-screen xl:overflow-y-scroll'>
                <div className='grid grid-cols-3 gap-7'>
                    <div className='col-span-3 md:col-span-2 flex flex-col gap-5'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[22px] font-semibold'>My Cards</h2>
                            <p className='text-[17px] font-semibold'>See All</p>
                        </div>
                        <div className='flex gap-[20px] lg:gap-[25px] xl:gap-[30px] no-scrollbar overflow-x-scroll'>

                            <BankCard />

                            <div className='w-full border border-white rounded-[20px]'>
                                <div className='relative flex h-[119px] xl:h-[165px] w-[265px] sm:w-full justify-between rounded-t-[20px] bg-white backdrop-blur-[6px]'>
                                    <div className='w-full flex flex-col gap-6 xl:gap-8 p-5 xl:p-[26px]'>
                                        <div className='flex justify-between items-center'>
                                            <div className='text-[#343C6A]'>
                                                <p className='text-[11px] xl:text-xs text-[#718EBF]'>Balance</p>
                                                <p className='text-base font-semibold xl:text-xl font-lato'>$3,211</p>
                                            </div>
                                            <div className='relative size-[29px] xl:size-[35px]'>
                                                <Image
                                                    src='/images/chip-card-black.svg'
                                                    alt="chip card"
                                                    fill
                                                    className='object-contain'
                                                />
                                            </div>
                                        </div>
                                        <article className='flex justify-between'>
                                            <div className='flex flex-col leading-tight'>
                                                <p className='uppercase text-[10px] xl:text-xs text-[#718EBF]'>card holder</p>
                                                <p className='font-lato text-[13px] xl:text-base text-[#343C6A]'>Desert Moon</p>
                                            </div>
                                            <div className='flex flex-col leading-tight'>
                                                <p className='uppercase text-[10px] xl:text-xs text-[#718EBF]'>valid thru</p>
                                                <p className='font-lato text-[13px] xl:text-base text-[#343C6A]'>03/22</p>
                                            </div>
                                        </article>
                                    </div>
                                    <Image
                                        src="/images/bg-card-lines-black.svg"
                                        fill
                                        alt='lines'
                                        className='object-cover opacity-20'
                                    />
                                </div>
                                <div className='h-[51px] xl:h-[70px] bg-white backdrop-blur-[6px] w-[265px] sm:w-full rounded-b-[20px]'>
                                    <div className='h-full border-t border-gray-200 flex justify-between items-center px-[26px]'>
                                        <div>
                                            <p className='font-lato min-w-[150px] text-[15px] xl:text-[18px] 2xl:text-[22px] text-[#343C6A]'>3211 ●●●● ●●●● 3211</p>
                                        </div>
                                        <MasterCardLogo fillColor="fill-gray-500" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* TODO RECENT TRANSACTIONS TABLE AND DONUT CHART */}
                    <TotalBalanceChart />

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