'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { LogOut, Search } from 'lucide-react'
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


const Navbar = ({ user }: NavbarProps) => {

    const router = useRouter()
    const pathName = usePathname()

    const handleLogOut = async () => {
        const loggedOut = await logOutAccount()

        // console.log('isLoggedOut: ', loggedOut)
        if (loggedOut) router.push('sign-in')
    }

    return (
        <nav className='flex flex-col gap-5 p-6 lg:px-7 lg:py-5 xl:px-10 w-full bg-white border-b border-gray-200'>
            <div className='flex justify-between items-center '>
                <MobileNavbar />
                <div>
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
                </div>

                <div className='flex items-center gap-7'>
                    <span className='hidden lg:flex items-center bg-[#F5F7FA] px-4 py-1 rounded-full'>
                        <Search className='stroke-[#718EBF]' />
                        <Input
                            placeholder='Search for something'
                            className='text-[#343C6A] placeholder:text-[#8BA3CB] border-none focus-visible:ring-offset-0 focus-visible:!ring-0 bg-transparent' />
                    </span>
                    <Link
                        href="/settings"
                        className='hidden lg:flex items-center justify-center bg-[#F5F7FA] p-3 rounded-full'>
                        <span className='lg:size-[18px] xl:size-[25px] relative'>
                            <Image
                                src="/images/settings-outline.svg"
                                alt="settings outline"
                                fill
                            />
                        </span>
                    </Link>
                    <div className='hidden lg:flex items-center justify-center cursor-pointer bg-[#F5F7FA] p-3 rounded-full'>
                        <span className='lg:size-[18px] xl:size-[25px] relative'>
                            <Image
                                src="/images/notification.svg"
                                alt="notification"
                                fill
                            />
                        </span>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar className='size-[35px] lg:size-[45px] xl:size-[60px]'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>DM</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <div className='flex gap-1'>
                                <Avatar className='size-[35px]'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>DM</AvatarFallback>
                                </Avatar>
                                <DropdownMenuLabel className='text-[#343C6A]'>
                                    {`${user.firstName} ${user.lastName}`}
                                </DropdownMenuLabel>
                            </div>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link
                                    href="/settings?tab=Edit%20Profile"
                                >Edit Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    href="/settings?tab=Security"
                                >Change Password</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={handleLogOut}
                            >
                                <LogOut className='mr-2 h-4 w-4' />
                                <span>Sign out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <span className='flex lg:hidden items-center bg-[#F5F7FA] px-4 py-1 rounded-full'>
                <Search className='stroke-[#718EBF]' />
                <Input
                    placeholder='Search for something'
                    className='text-[#343C6A] placeholder:text-[#8BA3CB] border-none focus-visible:ring-offset-0 focus-visible:!ring-0 bg-transparent' />
            </span>
        </nav>
    )
}

export default Navbar