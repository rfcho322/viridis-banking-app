'use client'
import { cn, formUrlQuery } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const BankTabItem = ({ account, appwriteItemId }: BankTabItemProps) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const isActive = appwriteItemId === account?.appwriteItemId

    const handleBankChange = () => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: 'id',
            value: account?.appwriteItemId
        })

        router.push(newUrl, { scroll: false })
    }

    return (
        <div
            onClick={handleBankChange}
            className={cn(`gap-[18px] border-b-[3px] flex px-2 sm:px-4 py-2 transition-all`, {
                ' border-green-500': isActive,
            })}
        >
            <p
                className={cn(`text-sm xl:text-base line-clamp-1 flex-1 font-medium text-[#343C6A]`, {
                    ' text-green-500': isActive
                })}
            >
                {account.name}
            </p>
        </div>
    )
}

export default BankTabItem