'use client'
import { authFormSchema } from '@/lib/utils'
import React, { useState } from 'react'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Eye, EyeOff } from 'lucide-react'

const formSchema = authFormSchema('sign-up')

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = name === 'password'

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='flex flex-col gap-1.5 flex-1 w-full'>
                    <FormLabel className='text-sm w-full max-w-[280px] font-medium text-gray-700'>
                        {label}
                    </FormLabel>
                    <div className='flex w-full flex-col gap-2'>
                        <FormControl>
                            <div className='relative'>
                                <Input
                                    placeholder={placeholder}
                                    className='text-base placeholder:text-base rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500'
                                    type={isPassword ? (showPassword ? 'text' : 'password') : 'text'}
                                    {...field}
                                />
                                {isPassword && (
                                    <button
                                        type='button'
                                        tabIndex={-1}
                                        onClick={() => setShowPassword((v) => !v)}
                                        className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                )}
                            </div>
                        </FormControl>
                        <FormMessage />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput
