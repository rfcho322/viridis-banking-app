import EditProfileForm from '@/components/EditProfileForm'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Settings = async () => {

    const loggedIn = await getLoggedInUser()

    return (
        <section className='no-scrollbar flex w-full flex-col gap-7 px-6 xl:px-10 py-5'>
            <div className='w-full rounded-[20px] bg-white backdrop-blur-[6px] px-7 py-9'>
                {/* TODO: CHANGE TABS DESIGN */}
                <Tabs defaultValue="edit-profile">
                    <TabsList className='custom-scrollbar flex gap-3 justify-start mb-6 !bg-transparent flex-nowrap'>
                        <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="edit-profile">
                        <EditProfileForm user={loggedIn} />
                    </TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default Settings