'use client'
import React, { useEffect, useState } from 'react'
import { EditProfileFormSchema } from '@/lib/utils';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import EditProfileInput from './EditProfileInput';
import { Loader2 } from 'lucide-react';
import { editProfile } from '@/lib/actions/user.actions';
import ToastMessage from './ToastMessage';

type User = {
    userId: string;
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
    email: string;
}
const formSchema = EditProfileFormSchema()

const EditProfileForm = ({ user }: { user: User }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [saved, setSaved] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            address1: user.address1,
            city: user.city,
            state: user.state,
            postalCode: user.postalCode,
            dateOfBirth: user.dateOfBirth,
            ssn: user.ssn,
            email: user.email
        },
    })

    const { isDirty } = form.formState;

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (isDirty) e.preventDefault();
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [isDirty]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        try {
            const userData = {
                firstName: values.firstName!,
                lastName: values.lastName!,
                address1: values.address1!,
                city: values.city!,
                state: values.state!,
                postalCode: values.postalCode!,
                dateOfBirth: values.dateOfBirth!,
                ssn: values.ssn!,
                email: values.email,
            }

            const response = await editProfile(userData);

            if (response.success) {
                ToastMessage({ type: "success", message: response.message })
                setSaved(true)
                setTimeout(() => setSaved(false), 2000)
                form.reset(values)
            }

        } catch (error) {
            console.log("Something went wrong", error)
            ToastMessage({
                type: "destructive",
                message: "Something went wrong while updating user, please try again."
            })
        }

        setIsLoading(false)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className='flex gap-7'>
                    <EditProfileInput
                        control={form.control}
                        name='firstName'
                        label='First Name'
                        placeholder="Enter your first name"
                    />
                    <EditProfileInput
                        control={form.control}
                        name='lastName'
                        label='Last Name'
                        placeholder="Enter your last name"
                    />
                </div>
                <EditProfileInput
                    control={form.control}
                    name='address1'
                    label='Address'
                    placeholder="Enter your specific address"
                />
                <div className='flex gap-7'>
                    <EditProfileInput
                        control={form.control}
                        name='city'
                        label='City'
                        placeholder="Enter your city"
                    />
                    <EditProfileInput
                        control={form.control}
                        name='state'
                        label='State'
                        placeholder="Example: NY"
                    />
                </div>
                <div className='flex justify-between gap-4'>
                    <EditProfileInput
                        control={form.control}
                        name='postalCode'
                        label='Postal Code'
                        placeholder="Example: 00000"
                    />
                    <EditProfileInput
                        control={form.control}
                        name='dateOfBirth'
                        label='Date of Birth'
                        placeholder="YYYY-MM-DD"
                    />
                </div>
                <div className='flex justify-between gap-4'>
                    <EditProfileInput
                        control={form.control}
                        name='ssn'
                        label='SSN'
                        placeholder="Example: 0000"
                    />
                    <EditProfileInput
                        control={form.control}
                        name='email'
                        label='Email'
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mt-5 flex w-full gap-3 py-5">
                    <Button
                        type="submit"
                        disabled={isLoading || !isDirty}
                        className="text-sm w-full sm:max-w-48 sm:ml-auto bg-green-500 font-semibold text-white shadow-form disabled:opacity-60">
                        {isLoading ? (
                            <><Loader2 size={20} className="animate-spin" />&nbsp;Saving changes...</>
                        ) : saved ? (
                            "Saved!"
                        ) : (
                            "Save"
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default EditProfileForm
