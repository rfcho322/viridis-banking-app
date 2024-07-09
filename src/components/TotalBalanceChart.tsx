'use client'
import DonutChart from './DonutChart'
import AmountCounter from './AmountCounter'

const TotalBalanceChart = ({
    accounts = [],
    totalBanks,
    totalCurrentBalance
}: TotalBalanceChartProps) => {
    return (
        <div className='col-span-3 md:col-span-1 flex flex-col gap-5'>
            <div className='flex items-center justify-between text-[#343C6A]'>
                <p className='text-[22px] font-semibold'>Overview</p>
            </div>
            <div className='relative flex items-center gap-5 lg:gap-2 xl:gap-5 p-5 lg:p-2 xl:p-5 h-[170px] xl:h-[235px] w-full rounded-[20px] bg-white backdrop-blur-[6px]'>
                <div className='max-w-[100px] xl:min-w-[150px]'>
                    <DonutChart accounts={accounts} />
                </div>

                <div className='flex flex-col gap-2 lg:gap-2 xl:gap-5'>
                    <h2 className='text-lg lg:text-xs xl:text-lg font-semibold text-[#343C6A]'>
                        Bank Accounts: {totalBanks}
                    </h2>
                    <div>
                        <p className='lg:text-[10px] xl:text-base text-[#718EBF]'>Total Current Balance</p>
                        <div className='text-3xl lg:text-xl xl:text-3xl text-[#343C6A] font-semibold font-lato'>
                            <AmountCounter amount={totalCurrentBalance} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalBalanceChart