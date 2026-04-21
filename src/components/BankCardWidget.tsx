import { BankCard, BankCardWhite } from "./BankCard"

const BankCardWidget = ({ user, banks }: BankCardWidgetProps) => {
    return (
        <div className='flex gap-[20px] lg:gap-[25px] xl:gap-[30px] no-scrollbar overflow-x-scroll'>

            {banks?.length > 0 && (
                <>
                    <div className='flex-shrink-0 w-[260px] lg:w-[300px] xl:w-[340px]'>
                        <BankCard
                            key={banks[0].$id}
                            account={banks[0]}
                            userName={`${user?.firstName} ${user?.lastName}`}
                            showBalance={false}
                        />
                    </div>

                    {banks[1] && (
                        <div className='flex-shrink-0 w-[260px] lg:w-[300px] xl:w-[340px]'>
                            <BankCardWhite
                                key={banks[1].$id}
                                account={banks[1]}
                                userName={`${user?.firstName} ${user?.lastName}`}
                                showBalance={false}
                            />
                        </div>
                    )}
                </>
            )}

        </div>
    )
}

export default BankCardWidget