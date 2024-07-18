import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { CircleAlert, CircleCheckBig } from 'lucide-react'
import { toast } from './ui/use-toast'
import { changePassword } from '@/lib/actions/user.actions'


const formSchema = z.object({
    currentPassword: z.string().min(8, {
        message: "Password should be at least 8 characters."
    }),
    newPassword: z.string().min(8, {
        message: "Password should be at least 8 characters."
    }),
})

const ChangePasswordForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        try {

            const userPasswordChange = {
                currentPassword: values.currentPassword,
                newPassword: values.newPassword,
            }

            const response = await changePassword(userPasswordChange);
            if (response.success) {
                toast({
                    variant: "success",
                    description: (
                        <div className='flex items-center gap-4'>
                            <span>
                                <CircleCheckBig />
                            </span>
                            <span>{response.message}</span>
                        </div>
                    ),
                })
            }
        } catch (error) {
            toast({
                variant: "destructive",
                description: (
                    <div className='flex items-center gap-4'>
                        <span>
                            <CircleAlert />
                        </span>
                        <span>Something went wrong while updating password, please try again</span>
                    </div>
                ),
            })
        }
    }

    return (
        <div>
            {/* TODO: MAYBE ADD CURRENT PASSWORD AND CHANGE PASSWORD FORM HERE*/}
            <h2 className="text-[17px] font-semibold text-[#343C6A] mb-4">
                Change Password
            </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="currentPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Current Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        className='max-w-[510px]'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        className='max-w-[510px]'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>

    )
}

export default ChangePasswordForm
