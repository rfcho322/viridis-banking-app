import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'
import SettingsTab from '@/components/SettingsTab'


const Settings = async () => {

    const loggedIn = await getLoggedInUser()

    return (
        <section className='no-scrollbar flex w-full flex-col gap-7 px-6 xl:px-10 py-5'>
            <div className='w-full rounded-[20px] bg-white backdrop-blur-[6px] px-7 py-9'>
                <SettingsTab user={loggedIn} />
            </div>
        </section>
    )
}

export default Settings