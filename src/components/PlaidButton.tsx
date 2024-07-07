import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'
import {
    usePlaidLink,
    PlaidLinkOptions,
    PlaidLinkOnSuccess,
} from 'react-plaid-link';
import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button';
import Image from 'next/image';

const PlaidButton = ({ user, variant }: PlaidButtonProps) => {
    const router = useRouter()
    const [token, setToken] = useState('')

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user)
            setToken(data?.linkToken)
        }

        getLinkToken()
    }, [user])

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        await exchangePublicToken({
            publicToken: public_token,
            user,
        })

        router.push('/')
    }, [user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess,
    }

    const { open, ready } = usePlaidLink(config)

    return (
        <>
            {variant === 'primary' ? (
                <Button
                    onClick={() => open()}
                    disabled={!ready}
                    className="text-16 rounded-lg border border-green-500 bg-green-500 font-semibold text-white"
                >
                    Connect Bank
                </Button>
                // TODO: THE BUTTONS BELOW SHARE THE SAME STYLES, CREATE A SINGLE CLASS FOR THESE COMPONENTS
            ) : variant === 'ghost' ? (
                <Button
                    onClick={() => open()}
                    variant="ghost"
                    className='flex !justify-start cursor-pointer gap-3 rounded-lg !bg-transparent flex-row'
                >
                    <Image
                        src="/images/credit-card.svg"
                        alt="credit card"
                        width={24}
                        height={24}
                    />
                    <p className='hidden xl:block text-[16px] font-bold text-[#343C6A]'>Connect Bank</p>
                </Button>
            ) : (
                <Button
                    onClick={() => open()}
                    className='flex !justify-start cursor-pointer gap-3 rounded-lg !bg-transparent flex-row'
                >
                    <Image
                        src="/images/credit-card.svg"
                        alt="credit card"
                        width={24}
                        height={24}
                    />
                    Connect Bank
                </Button>
            )}
        </>
    )
}

export default PlaidButton