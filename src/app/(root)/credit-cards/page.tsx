import { BankCard, BankCardWhite } from '@/components/BankCard'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const CreditCards = async () => {

    const loggedIn = await getLoggedInUser()
    const accounts = await getAccounts({ userId: loggedIn.$id })

    if (!accounts) return

    return (
        <section className='no-scrollbar flex w-full flex-col gap-7 px-6 xl:px-10 py-5'>
            <div className='grid grid-cols-3 gap-7'>
                {accounts && accounts.data.map((a: Account, index: number) => (
                    <div className='col-span-3 md:col-span-1' key={accounts.id}>
                        {index % 2 === 0 ? (
                            <BankCard
                                key={accounts.id}
                                account={a}
                                userName={`${loggedIn?.firstName} ${loggedIn?.lastName}`}
                            />
                        ) : (
                            <BankCardWhite
                                key={accounts.id}
                                account={a}
                                userName={`${loggedIn?.firstName} ${loggedIn?.lastName}`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CreditCards