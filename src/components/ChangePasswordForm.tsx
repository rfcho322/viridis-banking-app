'use client'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { changePassword } from '@/lib/actions/user.actions'
import ToastMessage from './ToastMessage'
import { Eye, EyeOff, Loader2 } from 'lucide-react'

const formSchema = z.object({
    currentPassword: z.string().min(8, {
        message: "Password should be at least 8 characters."
    }),
    newPassword: z.string().min(8, {
        message: "Password should be at least 8 characters."
    }),
    confirmPassword: z.string().min(8, {
        message: "Password should be at least 8 characters."
    }),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
})

type ShowState = { current: boolean; new: boolean; confirm: boolean }

const ChangePasswordForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState<ShowState>({ current: false, new: false, confirm: false })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        try {
            const response = await changePassword({
                currentPassword: values.currentPassword,
                newPassword: values.newPassword,
            })
            if (response.success) {
                ToastMessage({ type: "success", message: response.message })
                form.reset()
            }
        } catch (error) {
            ToastMessage({
                type: "destructive",
                message: "Something went wrong while updating password, please try again"
            })
        }
        setIsLoading(false)
    }

    const toggleShow = (field: keyof ShowState) =>
        setShow(prev => ({ ...prev, [field]: !prev[field] }))

    const PasswordField = ({
        name,
        label,
        showKey,
    }: {
        name: 'currentPassword' | 'newPassword' | 'confirmPassword'
        label: string
        showKey: keyof ShowState
    }) => (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">{label}</FormLabel>
                    <FormControl>
                        <div className="relative max-w-[510px]">
                            <Input
                                type={show[showKey] ? 'text' : 'password'}
                                className="rounded-lg border border-gray-300 text-gray-900"
                                {...field}
                            />
                            <button
                                type="button"
                                tabIndex={-1}
                                onClick={() => toggleShow(showKey)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {show[showKey] ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <PasswordField name="currentPassword" label="Current Password" showKey="current" />
                <PasswordField name="newPassword" label="New Password" showKey="new" />
                <PasswordField name="confirmPassword" label="Confirm New Password" showKey="confirm" />
                <div className="flex w-full pt-2">
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="text-sm w-full sm:max-w-48 sm:ml-auto bg-green-500 font-semibold text-white shadow-form"
                    >
                        {isLoading ? (
                            <><Loader2 size={20} className="animate-spin" />&nbsp;Updating...</>
                        ) : (
                            "Update Password"
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default ChangePasswordForm
