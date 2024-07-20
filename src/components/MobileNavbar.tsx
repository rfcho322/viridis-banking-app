'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarFooter from "./SidebarFooter";

const MobileNavbar = ({ user }: MobileNavbarProps) => {

    const pathName = usePathname();

    return (
        <section className="lg:hidden bg-white">
            <Sheet>
                <SheetTrigger>
                    <div className='relative w-[14px] h-[18px]'>
                        <Image
                            src="/images/hamburger-menu.svg"
                            alt="hamburger menu"
                            fill
                        />
                    </div>
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="w-[300px] pl-0 flex flex-col justify-between"
                >
                    <SheetHeader className="hidden">
                        <SheetTitle>Sidebar</SheetTitle>
                        <SheetDescription>Sidebar for Viridis banking app</SheetDescription>
                    </SheetHeader>
                    {/* <SheetClose asChild> */}
                    <nav className='flex flex-col gap-3 lg:gap-0'>
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
                                <SheetClose
                                    asChild
                                    key={item.route}
                                >
                                    <Link
                                        key={item.label}
                                        href={item.route}
                                        className='flex items-center group'
                                    >
                                        <div className='flex items-center gap-6 sm:pr-4'>
                                            <div className={cn('opacity-0 w-[6px] h-[50px] xl:h-[60px] bg-green-500 rounded-r-lg', {
                                                'opacity-100 transition-opacity duration-500': isActive
                                            })} />
                                            <div className='relative size-6'>
                                                <item.Component selected={pathName === item.route} />
                                            </div>
                                            <p className={cn('text-[#B1B1B1] font-medium text-lg', {
                                                'text-green-500': isActive
                                            })}>{item.label}</p>
                                        </div>
                                    </Link>
                                </SheetClose>
                            )
                        })}
                    </nav>
                    <SidebarFooter user={user} />
                    {/* </SheetClose> */}
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNavbar