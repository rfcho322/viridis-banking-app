'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { CreditCard, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn, signUp } from '@/lib/actions/user.actions'
import PlaidButton from './PlaidButton'

const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const formSchema = authFormSchema(type)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        // console.log(data)
        setIsLoading(true)
        try {

            // SIGN UP WITH Appwrite AND CREATE Plaid LINK TOKEN
            const userData = {
                firstName: data.firstName!,
                lastName: data.lastName!,
                address1: data.address1!,
                city: data.city!,
                state: data.state!,
                postalCode: data.postalCode!,
                dateOfBirth: data.dateOfBirth!,
                ssn: data.ssn!,
                email: data.email,
                password: data.password
            }

            if (type === 'sign-up') {
                const newUser = await signUp(userData);
                setUser(newUser)
            }

            if (type === 'sign-in') {
                const response = await signIn({
                    email: data.email,
                    password: data.password
                })

                if (response) router.push('/')
            }

        } catch (error: any) {
            // console.log(error)
            // TODO: DONE ADDING ERROR MESSAGE ON SIGN IN, ADD THIS TO REPO LATER
            setErrorMessage((error as Error).message)
            setIsLoading(false)
        }
        // finally {
        //     setIsLoading(false)
        // }
    }

    return (
        <section className='flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link
                    href="/"
                    className="flex items-center cursor-pointer gap-1 text-3xl text-[#343C6A] font-bold"
                >
                    <span>
                        <CreditCard className='w-8 h-8 mr-1' />
                    </span>
                    Viridis.
                </Link>

                <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className='text-2xl lg:text-4xl font-bold text-gray-900'>
                        {user
                            ? 'Link Account'
                            : type === 'sign-in'
                                ? 'Sign In'
                                : 'Sign Up'
                        }

                        <p className='text-base font-normal text-gray-600'>
                            {user
                                ? 'Link your account to get started'
                                : 'Please enter your details'
                            }
                        </p>
                    </h1>
                </div>
            </header>
            {user ? (
                <div className='flex flex-col gap-4'>
                    {/* PLAID BUTTON */}
                    <PlaidButton user={user} variant="primary" />
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {errorMessage &&
                                <p className='text-red-500'>{errorMessage}</p>
                            }
                            {type === 'sign-up' && (
                                <>
                                    <div className='flex justify-between gap-4'>
                                        <CustomInput
                                            control={form.control}
                                            name='firstName'
                                            label='First Name'
                                            placeholder="Enter your first name"
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name='lastName'
                                            label='Last Name'
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                    <CustomInput
                                        control={form.control}
                                        name='address1'
                                        label='Address'
                                        placeholder="Enter your specific address"
                                    />
                                    <CustomInput
                                        control={form.control}
                                        name='city'
                                        label='City'
                                        placeholder="Enter your city"
                                    />
                                    <div className='flex justify-between gap-4'>
                                        <CustomInput
                                            control={form.control}
                                            name='state'
                                            label='State'
                                            placeholder="Example: NY"
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name='postalCode'
                                            label='Postal Code'
                                            placeholder="Example: 0000"
                                        />
                                    </div>
                                    <div className='flex justify-between gap-4'>
                                        <CustomInput
                                            control={form.control}
                                            name='dateOfBirth'
                                            label='Date of Birth'
                                            placeholder="YYYY-MM-DD"
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name='ssn'
                                            label='SSN'
                                            placeholder="Example: 0000"
                                        />
                                    </div>
                                </>
                            )}
                            <CustomInput
                                control={form.control}
                                name='email'
                                label='Email'
                                placeholder="Enter your email"
                            />
                            <CustomInput
                                control={form.control}
                                name='password'
                                label='Password'
                                placeholder="Enter your password"
                            />
                            <div className='flex flex-col gap-4'>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className='text-base rounded-lg font-semibold text-white shadow-form'
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20} className='animate-spin' /> &nbsp; Loading...
                                        </>
                                    ) : type === 'sign-in'
                                        ? 'Sign In' : 'Sign Up'
                                    }
                                </Button>
                            </div>
                        </form>
                    </Form>

                    <footer className='flex justify-center gap-1'>
                        <p className='text-sm text-gray-600'>
                            {
                                type === 'sign-in'
                                    ? "Don't have an account?"
                                    : "Already have an account?"
                            }
                        </p>
                        <Link
                            href={type === 'sign-in' ? '/sign-up'
                                : '/sign-in'}
                            className='text-sm cursor-pointer font-medium text-green-500'
                        >
                            {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
                        </Link>
                    </footer>
                </>
            )}

        </section>
    )
}

export default AuthForm