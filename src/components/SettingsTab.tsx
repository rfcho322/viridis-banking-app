'use client'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SettingsTabItem from '@/components/SettingsTabItem'
import EditProfileForm from '@/components/EditProfileForm'
import { string } from 'zod'

type User = {
    userId: string;
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
    email: string;
}

const SettingsTab = ({ user }: { user: User }) => {
    const tabItems = [
        { label: 'Edit Profile' },
        { label: 'Security' },
    ]
    const [activeTab, setActiveTab] = useState(tabItems[0].label);

    return (
        <Tabs defaultValue={tabItems[0].label} onValueChange={setActiveTab}>
            <TabsList className='custom-scrollbar flex gap-3 justify-start mb-6 !bg-transparent flex-nowrap'>
                {tabItems.map((tabItems, index) => (
                    <TabsTrigger
                        key={index}
                        value={tabItems.label}
                    >
                        <SettingsTabItem
                            key={index}
                            label={tabItems.label}
                            activeTab={activeTab}
                        />
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabItems.map((tabItem, index) => (
                <TabsContent
                    key={index}
                    value={tabItem.label}>
                    {tabItem.label === "Edit Profile" && <EditProfileForm user={user} />}
                    {tabItem.label === "Security" &&
                        <div>
                            {/* TODO: MAYBE ADD CURRENT PASSWORD AND CHANGE PASSWORD FORM HERE*/}
                            Change Password
                        </div>
                    }
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default SettingsTab