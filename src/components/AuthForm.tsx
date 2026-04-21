'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Progress } from "@/components/ui/progress"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn, signUp } from '@/lib/actions/user.actions'
import PlaidButton from './PlaidButton'
import Image from 'next/image'
import { FieldPath } from 'react-hook-form'

const STEPS: { label: string; fields: string[] }[] = [
    { label: 'Personal Info', fields: ['firstName', 'lastName', 'dateOfBirth', 'ssn'] },
    { label: 'Address',       fields: ['address1', 'city', 'state', 'postalCode'] },
    { label: 'Your Account',  fields: ['email', 'password'] },
]

const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState(1)

    const isSignUp = type === 'sign-up'
    const totalSteps = STEPS.length
    const isLastStep = step === totalSteps

    const formSchema = authFormSchema(type)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            address1: "",
            city: "",
            state: "",
            postalCode: "",
            dateOfBirth: "",
            ssn: "",
            email: "",
            password: ""
        },
    })

    const handleNext = async () => {
        const fields = STEPS[step - 1].fields as FieldPath<z.infer<typeof formSchema>>[]
        const valid = await form.trigger(fields)
        if (valid) {
            setErrorMessage(null)
            setStep((s) => s + 1)
        }
    }

    const handleBack = () => {
        setErrorMessage(null)
        setStep((s) => s - 1)
    }

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        try {
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
                const newUser = await signUp(userData)
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
            setErrorMessage((error as Error).message)
            setIsLoading(false)
        }
    }

    return (
        <section className='flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link
                    href="/"
                    className="flex items-center cursor-pointer gap-1 text-3xl text-[#343C6A] font-bold"
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
                    <PlaidButton user={user} variant="primary" />
                </div>
            ) : (
                <>
                    {isSignUp && (
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <p className='text-sm font-medium text-[#343C6A]'>
                                    {STEPS[step - 1].label}
                                </p>
                                <p className='text-xs text-[#718EBF]'>
                                    Step {step} of {totalSteps}
                                </p>
                            </div>
                            <Progress
                                value={(step / totalSteps) * 100}
                                className='h-1.5 bg-gray-100'
                                indicatorClassName='bg-green-500'
                            />
                        </div>
                    )}

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                            {errorMessage && (
                                <p className='text-destructive text-sm'>{errorMessage}</p>
                            )}

                            {isSignUp ? (
                                <>
                                    {step === 1 && (
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

                                    {step === 2 && (
                                        <>
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
                                                    placeholder="Example: 00000"
                                                />
                                            </div>
                                        </>
                                    )}

                                    {step === 3 && (
                                        <>
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
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
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
                                </>
                            )}

                            <div className='flex gap-3 pt-2'>
                                {isSignUp && step > 1 && (
                                    <Button
                                        type='button'
                                        variant='outline'
                                        onClick={handleBack}
                                        className='flex-1 rounded-lg border-gray-200 text-gray-600'
                                    >
                                        Back
                                    </Button>
                                )}

                                {isSignUp && !isLastStep ? (
                                    <Button
                                        type='button'
                                        onClick={handleNext}
                                        className='flex-1 text-base rounded-lg font-semibold text-white shadow-form'
                                    >
                                        Next
                                    </Button>
                                ) : (
                                    <Button
                                        type='submit'
                                        disabled={isLoading}
                                        className='flex-1 text-base rounded-lg font-semibold text-white shadow-form'
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 size={20} className='animate-spin' /> &nbsp; Loading...
                                            </>
                                        ) : type === 'sign-in'
                                            ? 'Sign In'
                                            : 'Sign Up'
                                        }
                                    </Button>
                                )}
                            </div>
                        </form>
                    </Form>

                    <footer className='flex justify-center gap-1'>
                        <p className='text-sm text-gray-600'>
                            {type === 'sign-in'
                                ? "Don't have an account?"
                                : "Already have an account?"
                            }
                        </p>
                        <Link
                            href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
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
