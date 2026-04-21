'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { CreditCard } from 'lucide-react'
import qs from 'query-string'
import { useRouter, useSearchParams } from 'next/navigation'

const AccountSelectDropdown = ({ accounts, selectedId }: { accounts: Account[], selectedId: string }) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleChange = (appwriteItemId: string) => {
        const currentParams = qs.parse(searchParams.toString())
        currentParams['id'] = appwriteItemId
        currentParams['page'] = '1'
        const newUrl = qs.stringifyUrl(
            { url: window.location.pathname, query: currentParams },
            { skipNull: true }
        )
        router.push(newUrl, { scroll: false })
    }

    return (
        <Select value={selectedId} onValueChange={handleChange}>
            <SelectTrigger className='w-48 sm:w-64 rounded-full border-[#DFEAF2] bg-white text-sm text-[#343C6A] focus:ring-green-500'>
                <div className='flex items-center gap-2'>
                    <CreditCard className='size-5 text-green-600 shrink-0' />
                    <SelectValue placeholder='Select Account' />
                </div>
            </SelectTrigger>
            <SelectContent>
                {accounts.map((account) => (
                    <SelectItem key={account.appwriteItemId} value={account.appwriteItemId}>
                        {account.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default AccountSelectDropdown
