import React from 'react'
import PlaidButton from './PlaidButton'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'

const SidebarFooter = ({ user, handleLogOut }: SidebarFooterProps) => {
    return (
        <footer className='w-full px-3 pb-3'>
            <PlaidButton user={user} />
            {/* TODO: LOGOUT BUTTON IS TEMPORARY, TRANSFER THIS TO A DROPDOWN WHEN PROFILE IS CLICKED ON TOP NAVBAR */}
            <Button
                onClick={handleLogOut}
                className='flex justify-center border-2 border-green-500 hover:border-white bg-white hover:bg-green-700 text-green-500 hover:text-white items-center gap-5 py-4 xl:py-5 mt-2 w-full'
            >
                <LogOut />
                <p className='font-medium text-base xl:text-lg'>
                    Sign Out
                </p>
            </Button>
        </footer>
    )
}

export default SidebarFooter