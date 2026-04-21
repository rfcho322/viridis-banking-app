'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import qs from 'query-string'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const TransactionsSearchBar = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentParams = qs.parse(searchParams.toString())

            if (searchTerm) {
                currentParams['search'] = searchTerm
            } else {
                delete currentParams['search']
            }

            currentParams['page'] = '1'

            const newUrl = qs.stringifyUrl(
                { url: window.location.pathname, query: currentParams },
                { skipNull: true }
            )

            router.push(newUrl, { scroll: false })
        }, 300)

        return () => clearTimeout(timer)
    }, [searchTerm])

    return (
        <div className='relative flex items-center'>
            <Search className='absolute left-3 size-4 text-[#718EBF]' />
            <Input
                type='text'
                placeholder='Search transactions...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='pl-9 w-48 sm:w-64 rounded-full border-[#DFEAF2] bg-white text-sm text-[#343C6A] placeholder:text-[#718EBF] focus-visible:ring-green-500'
            />
        </div>
    )
}

export default TransactionsSearchBar
