import { authFormSchema } from '@/lib/utils'
import React from 'react'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

const formSchema = authFormSchema('sign-up')

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    // USING FieldPath IT WILL ALWAYS KNOW EXACTLY WHICH FIELDS IT HAVE
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='flex flex-col gap-1.5'>
                    <FormLabel className='text-sm w-full max-w-[280px] font-medium text-gray-700'>
                        {label}
                    </FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className='text-base placeholder:text-base rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500'
                                type={name === "password" ? "password" : "text"}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className='text-xs text-red-500 mt-2' />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput