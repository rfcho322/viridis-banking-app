import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import MobileNavbar from '../MobileNavbar'

const Navbar = () => {
    return (
        <nav className='flex flex-col gap-5 p-6 lg:px-7 lg:py-5 xl:px-10 w-full border-b border-gray-200'>
            <div className='flex justify-between items-center '>
                <MobileNavbar />
                <div>
                    <h1 className='text-[#343C6A] font-semibold text-xl lg:text-2xl xl:text-3xl'>Overview</h1>
                </div>

                <div className='flex items-center gap-7'>
                    <span className='hidden lg:flex items-center bg-[#F5F7FA] px-4 py-1 rounded-full'>
                        <Search className='stroke-[#718EBF]' />
                        <Input
                            placeholder='Search for something'
                            className='text-[#343C6A] placeholder:text-[#8BA3CB] border-none focus-visible:ring-offset-0 focus-visible:!ring-0 bg-transparent' />
                    </span>
                    <div className='hidden lg:flex items-center justify-center cursor-pointer bg-[#F5F7FA] p-3 rounded-full'>
                        <span className='lg:size-[18px] xl:size-[25px] relative'>
                            <Image
                                src="/images/settings-outline.svg"
                                alt="settings outline"
                                fill
                            />
                        </span>
                    </div>
                    <div className='hidden lg:flex items-center justify-center cursor-pointer bg-[#F5F7FA] p-3 rounded-full'>
                        <span className='lg:size-[18px] xl:size-[25px] relative'>
                            <Image
                                src="/images/notification.svg"
                                alt="notification"
                                fill
                            />
                        </span>
                    </div>
                    <Avatar className='size-[35px] lg:size-[45px] xl:size-[60px]'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
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