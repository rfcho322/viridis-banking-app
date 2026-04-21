'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bell } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { formatAmount } from '@/lib/utils'
import { getRecentTransactionsAllBanks } from '@/lib/actions/bank.actions'

const relativeDate = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime()
    const days = Math.floor(diff / 86400000)
    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    return `${days}d ago`
}

const NotificationDropdown = ({ userId }: { userId: string }) => {
    const [groups, setGroups] = useState<NotificationBankGroup[]>([])
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

    useEffect(() => {
        let cancelled = false
        getRecentTransactionsAllBanks(userId)
            .then((data) => {
                if (cancelled) return
                setGroups(data ?? [])
                setStatus('ready')
            })
            .catch(() => {
                if (!cancelled) setStatus('error')
            })
        return () => {
            cancelled = true
        }
    }, [userId])

    const hasAny = groups.some((g) => g.transactions.length > 0)
    const showGreenDot = status === 'ready' && hasAny

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className='hidden lg:flex items-center justify-center bg-[#F5F7FA] p-3 rounded-full hover:bg-[#e7e9ec] focus:outline-none'>
                    <span className='relative'>
                        <Bell className='lg:size-[18px] xl:size-[22px] stroke-[#718EBF]' />
                        {showGreenDot && (
                            <span className='absolute -top-1 -right-1 size-2 rounded-full bg-green-500' />
                        )}
                    </span>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align='end'
                className='w-[320px] rounded-[16px] p-0 shadow-lg border border-gray-100 overflow-hidden'
            >
                {/* Header */}
                <div className='px-4 py-3 border-b border-gray-100'>
                    <p className='text-[#343C6A] font-semibold text-base'>Notifications</p>
                </div>

                {/* Body */}
                <div className='max-h-[380px] overflow-y-auto'>
                    {status === 'loading' && (
                        <>
                            {[0, 1, 2].map((i) => (
                                <div
                                    key={i}
                                    className='flex items-center justify-between px-4 py-2.5 animate-pulse'
                                >
                                    <div className='flex flex-col gap-1.5 flex-1'>
                                        <div className='h-3 bg-gray-200 rounded w-24' />
                                        <div className='h-2 bg-gray-100 rounded w-16' />
                                    </div>
                                    <div className='h-3 bg-gray-200 rounded w-12' />
                                </div>
                            ))}
                        </>
                    )}

                    {status === 'error' && (
                        <p className='text-center text-[#718EBF] text-sm py-6'>
                            Unable to load notifications
                        </p>
                    )}

                    {status === 'ready' && !hasAny && (
                        <p className='text-center text-[#718EBF] text-sm py-6'>
                            No recent transactions
                        </p>
                    )}

                    {status === 'ready' && hasAny && (
                        groups.map((group) => (
                            group.transactions.length > 0 && (
                                <div key={group.appwriteItemId}>
                                    {/* Bank section label */}
                                    <p className='px-4 pt-3 pb-1 text-[10px] uppercase tracking-wider text-[#718EBF] font-medium'>
                                        {group.accountName}
                                    </p>

                                    {group.transactions.map((t: Transaction) => {
                                        const isDebit = t.type === 'debit' || t.amount > 0
                                        return (
                                            <div
                                                key={t.id || t.$id}
                                                className='flex items-center justify-between px-4 py-2.5 hover:bg-[#F5F7FA] transition-colors'
                                            >
                                                <div className='flex flex-col gap-0.5 min-w-0 mr-3'>
                                                    <p className='text-[#343C6A] text-[13px] font-medium truncate'>
                                                        {t.name}
                                                    </p>
                                                    {t.category && (
                                                        <span className='text-[10px] text-[#718EBF] bg-[#EDF0F7] rounded-full px-2 py-0.5 w-fit truncate max-w-[160px]'>
                                                            {t.category}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className='flex flex-col items-end gap-0.5 flex-shrink-0'>
                                                    <p className={`text-xs font-semibold font-lato ${isDebit ? 'text-red-500' : 'text-green-500'}`}>
                                                        {isDebit ? '-' : '+'}{formatAmount(Math.abs(t.amount))}
                                                    </p>
                                                    <p className='text-[10px] text-[#718EBF]'>
                                                        {relativeDate(t.date || t.$createdAt)}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        ))
                    )}
                </div>

                {/* Footer */}
                <div className='border-t border-gray-100'>
                    <Link
                        href='/transactions'
                        className='flex items-center justify-center py-3 text-xs font-medium text-green-600 hover:text-green-700 transition-colors'
                    >
                        View all transactions →
                    </Link>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NotificationDropdown
