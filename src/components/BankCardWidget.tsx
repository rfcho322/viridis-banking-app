import { BankCard, BankCardWhite } from "./BankCard"

const BankCardWidget = ({ user, banks }: BankCardWidgetProps) => {
    return (
        <div className='flex gap-[20px] lg:gap-[25px] xl:gap-[30px] no-scrollbar overflow-x-scroll'>

            {banks?.length > 0 && (
                <>
                    <BankCard
                        key={banks[0].$id}
                        account={banks[0]}
                        userName={`${user?.firstName} ${user?.lastName}`}
                        showBalance={false}
                    />

                    {banks[1] && (
                        <BankCardWhite
                            key={banks[1].$id}
                            account={banks[1]}
                            userName={`${user?.firstName} ${user?.lastName}`}
                            showBalance={false}
                        />
                    )}
                </>
            )}

        </div>
    )
}

export default BankCardWidget