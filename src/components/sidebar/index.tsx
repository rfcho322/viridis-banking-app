'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { CreditCard } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { logOutAccount } from '@/lib/actions/user.actions'
import SidebarFooter from '../SidebarFooter'

const Sidebar = ({ user }: SidebarProps) => {

    const router = useRouter()
    const pathName = usePathname();

    const handleLogOut = async () => {
        const loggedOut = await logOutAccount()

        console.log('isLoggedOut: ', loggedOut)
        if (loggedOut) router.push('sign-in')
    }

    return (
        <section className='sticky custom-scrollbar overflow-y-auto left-0 top-0 flex flex-col h-screen justify-between w-fit border-r border-gray-200 bg-white text-white max-lg:hidden lg:w-[300px] group'>
            <nav className='flex flex-col'>
                <Link
                    href="/"
                    className='flex justify-center items-center mb-3 px-10 py-8 text-3xl text-[#343C6A] font-bold'
                >
                    <span>
                        <CreditCard className='w-8 h-8 mr-1' />
                    </span>
                    Viridis.
                </Link>
                {sidebarLinks.map((item) => {
                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)

                    return (
                        <Link
                            key={item.label}
                            href={item.route}
                            className='flex items-center group'
                        >
                            <div className='flex items-center gap-6 sm:pr-4'>
                                <div className={cn('opacity-0 w-[6px] lg:h-[50px] xl:h-[60px] bg-green-500 rounded-r-lg', {
                                    'opacity-100 transition-opacity duration-500': isActive
                                })} />
                                <div className='relative size-5 xl:size-6'>
                                    <item.Component selected={pathName === item.route} />
                                </div>
                                <p className={cn('text-[#B1B1B1] font-medium text-base xl:text-lg', {
                                    'text-green-500': isActive
                                })}>{item.label}</p>
                            </div>
                        </Link>
                    )
                })}
            </nav>
            {/* TODO: FOOTER LAYOUT FOR CONNECT BANK AND LOGOUT MAYBE */}
            <SidebarFooter user={user} handleLogOut={handleLogOut} />
        </section>
    )
}

export default Sidebar