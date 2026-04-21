'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import MobileNavbar from '../MobileNavbar'
import { usePathname, useRouter } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logOutAccount } from '@/lib/actions/user.actions'
import Link from 'next/link'
import NotificationDropdown from '../NotificationDropdown'


const Navbar = ({ user }: NavbarProps) => {

    const router = useRouter()
    const pathName = usePathname()

    const handleLogOut = async () => {
        const loggedOut = await logOutAccount()

        // console.log('isLoggedOut: ', loggedOut)
        if (loggedOut) router.push('sign-in')
    }

    return (
        <nav className='flex items-center justify-between p-6 lg:px-7 lg:py-5 xl:px-10 w-full bg-white border-b border-gray-200'>
            <MobileNavbar user={user} />

            <h1 className='text-[#343C6A] font-semibold text-xl lg:text-2xl xl:text-3xl'>
                {pathName === '/transactions'
                    ? 'Transactions'
                    : pathName === '/credit-cards'
                        ? 'Credit Cards'
                        : pathName === '/payment-transfer'
                            ? 'Payment Transfer'
                            : pathName === '/settings'
                                ? 'Settings'
                                : 'Overview'
                }
            </h1>

            <div className='flex items-center gap-7'>
                <Link
                    href="/settings"
                    className='hidden lg:flex items-center justify-center bg-[#F5F7FA] p-3 rounded-full hover:bg-[#e7e9ec]'>
                    <span className='lg:size-[18px] xl:size-[25px] relative'>
                        <Image
                            src="/images/settings-outline.svg"
                            alt="settings outline"
                            fill
                        />
                    </span>
                </Link>
                <NotificationDropdown userId={user.$id} />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar className='size-[35px] lg:size-[45px]'>
                            {/* TEMPORARY: USER'S INITIALS WILL BE THE AVATAR */}
                            {/* TODO NON-PRIO (FUTURE UPDATE): ADD ABILITY TO GET THE IMAGE FROM DATABASE */}
                            <AvatarImage src="https://viridis/image.png" />
                            <AvatarFallback className='bg-green-500 hover:bg-green-600 text-white'>{`${user.firstName[0]}${user.lastName[0]}`}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <div className='flex gap-1 p-2'>
                            <Avatar className='size-[35px]'>
                                {/* TEMPORARY: USER'S INITIALS WILL BE THE AVATAR */}
                                {/* TODO NON-PRIO (FUTURE UPDATE): ADD ABILITY TO GET THE IMAGE FROM DATABASE */}
                                <AvatarImage src="https://viridis/image.png" />
                                <AvatarFallback className='bg-green-500 text-white'>{`${user.firstName[0]}${user.lastName[0]}`}</AvatarFallback>
                            </Avatar>
                            <DropdownMenuLabel className='text-[#343C6A]'>
                                {`${user.firstName} ${user.lastName}`}
                            </DropdownMenuLabel>
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='p-2 hover:bg-[#F5F7FA] focus:bg-[#F5F7FA]'>
                            <Link href="/settings?tab=Edit%20Profile">Edit Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='p-2 hover:bg-[#F5F7FA] focus:bg-[#F5F7FA]'>
                            <Link href="/settings?tab=Security">Change Password</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='p-2 hover:bg-[#F5F7FA] focus:bg-[#F5F7FA]' onClick={handleLogOut}>
                            <LogOut className='mr-2 h-4 w-4' />
                            <span>Sign out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav >
    )
}

export default Navbar