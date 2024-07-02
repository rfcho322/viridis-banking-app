import MasterCardLogo from '@/components/icons/master-card-logo'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
    return (
        <section className='no-scrollbar bg-[#F5F7FA] flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll'>
            <div className='no-scrollbar flex w-full flex-col gap-8 px-10 py-5 xl:max-h-screen xl:overflow-y-scroll'>
                <div className='grid grid-cols-3 gap-7'>
                    <div className='col-span-3 lg:col-span-2 flex flex-col gap-5'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[22px] font-semibold'>My Cards</h2>
                            <p className='text-[17px] font-semibold'>See All</p>
                        </div>
                        <div className='flex justify-between gap-[25px]'>
                            <div className='relative flex h-[170px] xl:h-[235px] w-full max-w-[375px] justify-between rounded-[20px] border border-white bg-bank-gradient backdrop-blur-[6px]'>
                                <div className='px-[26px] pt-6 w-full'>
                                    <div className='flex justify-between items-center'>
                                        <div className='text-white'>
                                            <p className='text-xs'>Balance</p>
                                            <p className='text-xl font-lato'>$3,211</p>
                                        </div>
                                        <div className='relative size-[35px]'>
                                            <Image
                                                src='/images/chip-card.svg'
                                                alt="chip card"
                                                fill
                                                className='object-contain'
                                            />
                                        </div>
                                    </div>

                                    <div className='flex gap-[67px] pt-8'>
                                        <div className='flex flex-col leading-tight'>
                                            <p className='uppercase text-xs text-white/70'>card holder</p>
                                            <p className='font-lato text-base text-white'>Desert Moon</p>
                                        </div>
                                        <div className='flex flex-col leading-tight'>
                                            <p className='uppercase text-xs text-white/70'>valid thru</p>
                                            <p className='font-lato text-base text-white'>03/22</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex px-[26px] justify-between items-center w-full bg-bank-white-gradient absolute bottom-0 h-[70px]'>
                                    <div>
                                        <p className='font-lato text-[22px] text-white'>3211 **** **** 3211</p>
                                    </div>
                                    <MasterCardLogo fillColor="white" />
                                </div>
                            </div>

                            <div className='relative flex h-[170px] xl:h-[235px] w-full max-w-[375px] justify-between rounded-[20px] border border-gray-200 bg-white backdrop-blur-[6px]'>
                                <div className='px-[26px] pt-6 w-full'>
                                    <div className='flex justify-between items-center'>
                                        <div className=''>
                                            <p className='text-xs text-[#718EBF]'>Balance</p>
                                            <p className='text-xl font-lato text-[#343C6A]'>$3,211</p>
                                        </div>
                                        <div className='relative size-[35px]'>
                                            <Image
                                                src='/images/chip-card-black.svg'
                                                alt="chip card"
                                                fill
                                                className='object-contain'
                                            />
                                        </div>
                                    </div>

                                    <div className='flex gap-[67px] pt-8'>
                                        <div className='flex flex-col leading-tight'>
                                            <p className='uppercase text-xs text-[#718EBF]'>card holder</p>
                                            <p className='font-lato text-base text-[#343C6A]'>Desert Moon</p>
                                        </div>
                                        <div className='flex flex-col leading-tight'>
                                            <p className='uppercase text-xs text-[#718EBF]'>valid thru</p>
                                            <p className='font-lato text-base text-[#343C6A]'>03/22</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex px-[26px] justify-between items-center w-full border-t border-gray-200 absolute bottom-0 h-[70px]'>
                                    <div>
                                        <p className='font-lato text-[22px] text-[#343C6A]'>3211 **** **** 3211</p>
                                    </div>
                                    <MasterCardLogo fillColor="gray-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-3 lg:col-span-1 flex flex-col gap-5'>
                        <div className='flex items-center justify-between'>
                            <p className='text-[22px] font-semibold'>Recent Transaction</p>
                        </div>
                        <div className='relative flex h-[170px] xl:h-[235px] w-full lg:max-w-[375px] justify-between rounded-[20px] bg-white backdrop-blur-[6px]'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard