'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import SidebarFooter from '../SidebarFooter'
import Image from 'next/image'

const Sidebar = ({ user }: SidebarProps) => {

    const pathName = usePathname();

    return (
        <section className='sticky custom-scrollbar overflow-y-auto left-0 top-0 flex flex-col h-screen justify-between w-fit border-r border-gray-200 bg-white text-white max-lg:hidden lg:w-[300px] group'>
            <nav className='flex flex-col'>
                <Link
                    href="/"
                    className='flex justify-center items-center gap-1 mb-3 px-10 py-8 text-3xl text-[#343C6A] font-bold'
                >
                    <div className='relative w-9 h-9'>
                        <Image
                            src="/images/viridis-logo.svg"
                            alt="Viridis logo"
                            fill
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                            className="object-contain"
                        />
                    </div>
                    Viridis.
                </Link>
                {sidebarLinks.map((item) => {
                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)

                    return (
                        <Link
                            key={item.label}
                            href={item.route}
                            aria-current={isActive ? 'page' : undefined}
                            className={cn('flex items-center w-full rounded-md transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2', {
                                'hover:bg-gray-100': !isActive,
                            })}
                        >
                            <div className='flex items-center gap-6 sm:pr-40'>
                                <div className={cn('opacity-0 w-[6px] lg:h-[50px] xl:h-[60px] bg-green-500 rounded-r-lg transition-opacity duration-500', {
                                    'opacity-100': isActive
                                })} />
                                <div className='relative size-5 xl:size-6'>
                                    <item.Component selected={isActive} />
                                </div>
                                <p className={cn('text-[#B1B1B1] font-medium text-base xl:text-lg whitespace-nowrap', {
                                    'text-green-500': isActive,
                                })}>{item.label}</p>
                            </div>
                        </Link>
                    )
                })}
            </nav>
            <SidebarFooter user={user} />
        </section>
    )
}

export default Sidebar