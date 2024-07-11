import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const PaymentTransfer = async () => {

    const loggedIn = await getLoggedInUser()
    const accounts = await getAccounts({ userId: loggedIn.$id })

    if (!accounts) return

    const accountsData = accounts?.data

    return (
        <section className='no-scrollbar flex w-full flex-col gap-7 px-6 xl:px-10 py-5'>
            <div className='relative w-full rounded-[20px] bg-white backdrop-blur-[6px] px-7 py-4'>
                <PaymentTransferForm
                    accounts={accountsData}
                />
            </div>
        </section>
    )
}

export default PaymentTransfer