'use client'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SettingsTabItem from '@/components/SettingsTabItem'
import EditProfileForm from '@/components/EditProfileForm'
import ChangePasswordForm from './ChangePasswordForm'
import { useSearchParams } from 'next/navigation'

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
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab') || "Edit Profile";
    const tabItems = [
        { label: 'Edit Profile' },
        { label: 'Security' },
    ]
    const [activeTab, setActiveTab] = useState(tabItems[0].label);

    useEffect(() => {
        setActiveTab(tab);
    }, [tab]);

    return (
        <Tabs defaultValue={tab} onValueChange={setActiveTab}>
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
                    value={tabItem.label}
                >
                    {activeTab === "Edit Profile" && <EditProfileForm user={user} />}
                    {activeTab === "Security" && <ChangePasswordForm />}
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default SettingsTab