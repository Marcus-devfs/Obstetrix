'use client'

import React from 'react'
import { useLoginHook } from './FormLogin.hooks'
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from '@/components/ui/shadcn/form'
import { Input } from '@nextui-org/react'
import { Button } from '@/components/ui/atoms'
import { MdArrowForward, MdLock } from 'react-icons/md'

export const FormLogin = () => {
    const { form, handleSubmit, loading } = useLoginHook()

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="w-full flex flex-col gap-4"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="exemple@exemple.com"
                                    {...field}
                                    label="E-mail"
                                    isRequired
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        {...field}
                                        type="password"
                                        isRequired
                                        label="Senha"
                                        placeholder="Senha"
                                    />
                                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
                                        <MdLock
                                            color="gray"
                                            className="text-lg"
                                        />
                                    </span>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="w-full">
                    <Button
                        className="w-full"
                        ui="primary"
                        endContent={<MdArrowForward color="white" />}
                        isLoading={loading}
                        type="submit"
                    >
                        {loading ? 'Login...' : 'Login'}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
