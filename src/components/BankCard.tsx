import Image from "next/image"
import MasterCardLogo from "./icons/master-card-logo"
import { formatAmount } from "@/lib/utils"

const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
    return (
        <div className='w-full border border-white rounded-[20px]'>
            <div className='relative flex h-[119px] xl:h-[165px] w-full sm:max-w-[265px] md:max-w-[231px] lg:max-w-[265px] xl:max-w-[300px] 2xl:max-w-[375px] justify-between rounded-t-[20px] bg-bank-gradient backdrop-blur-[6px]'>
                <div className='w-full flex flex-col gap-6 xl:gap-8 p-5 xl:p-[26px]'>
                    <div className='flex justify-between items-center'>
                        <div className='text-white'>
                            <p className='text-[11px] xl:text-xs'>
                                {account.name}
                            </p>
                            <p className='text-base font-semibold xl:text-xl font-lato'>
                                {formatAmount(account.currentBalance)}
                            </p>
                        </div>
                        <div className='relative size-[29px] xl:size-[35px]'>
                            <Image
                                src='/images/chip-card.svg'
                                alt="chip card"
                                fill
                                className='object-contain'
                            />
                        </div>
                    </div>
                    <article className='flex justify-between'>
                        <div className='flex flex-col leading-tight'>
                            <p className='uppercase text-[10px] xl:text-xs text-white/70'>card holder</p>
                            <p className='font-lato text-[13px] xl:text-base text-white'>
                                {userName}
                            </p>
                        </div>
                        <div className='flex flex-col leading-tight'>
                            <p className='uppercase text-[10px] xl:text-xs text-white/70'>valid thru</p>
                            <p className='font-lato text-[13px] xl:text-base text-white'>
                                ●●/●●
                            </p>
                        </div>
                    </article>
                </div>
                <Image
                    src="/images/bg-card-lines.svg"
                    fill
                    alt='lines'
                    className='object-cover opacity-20'
                />
            </div>
            <div className='h-[51px] xl:h-[70px] bg-bank-gradient backdrop-blur-[6px] w-full sm:max-w-[265px] md:max-w-[231px] lg:max-w-[265px] xl:max-w-[300px] 2xl:max-w-[375px] rounded-b-[20px]'>
                <div className='h-full bg-bank-white-gradient flex justify-between items-center px-[26px]'>
                    <div>
                        <p className='font-lato min-w-[150px] text-[15px] xl:text-[18px] 2xl:text-[22px] text-white'>
                            ●●●● ●●●● ●●●● {account?.mask}
                        </p>
                    </div>
                    <MasterCardLogo fillColor="fill-white" />
                </div>
            </div>
        </div>
    )
}

const BankCardWhite = ({ account, userName, showBalance = true }: CreditCardProps) => {
    return (
        <div className='w-full border border-white rounded-[20px]'>
            <div className='relative flex h-[119px] xl:h-[165px] w-full sm:max-w-[265px] md:max-w-[231px] lg:max-w-[265px] xl:max-w-[300px] 2xl:max-w-[375px] justify-between rounded-t-[20px] bg-white backdrop-blur-[6px]'>
                <div className='w-full flex flex-col gap-6 xl:gap-8 p-5 xl:p-[26px]'>
                    <div className='flex justify-between items-center'>
                        <div className='text-[#343C6A]'>
                            <p className='text-[11px] xl:text-xs text-[#718EBF]'>
                                {account.name}
                            </p>
                            <p className='text-base font-semibold xl:text-xl font-lato'>
                                {formatAmount(account.currentBalance)}
                            </p>
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
                            <p className='font-lato text-[13px] xl:text-base text-[#343C6A]'>
                                {userName}
                            </p>
                        </div>
                        <div className='flex flex-col leading-tight'>
                            <p className='uppercase text-[10px] xl:text-xs text-[#718EBF]'>valid thru</p>
                            <p className='font-lato text-[13px] xl:text-base text-[#343C6A]'>
                                ●●/●●
                            </p>
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
            <div className='h-[51px] xl:h-[70px] bg-white backdrop-blur-[6px] w-full sm:max-w-[265px] md:max-w-[231px] lg:max-w-[265px] xl:max-w-[300px] 2xl:max-w-[375px] rounded-b-[20px]'>
                <div className='h-full border-t border-gray-200 flex justify-between items-center px-[26px]'>
                    <div>
                        <p className='font-lato min-w-[150px] text-[15px] xl:text-[18px] 2xl:text-[22px] text-[#343C6A]'>
                            ●●●● ●●●● ●●●● {account?.mask}
                        </p>
                    </div>
                    <MasterCardLogo fillColor="fill-gray-500" />
                </div>
            </div>
        </div>
    )
}

export { BankCard, BankCardWhite }
