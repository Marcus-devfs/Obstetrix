'use client'

import React from 'react'
import { useContactUsHook } from './FormContactUsHooks'
import { maskPhone } from '@/helpers/utils'

import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from '@/components/ui/shadcn/form'
import { Input, Textarea } from '@nextui-org/react'
import { Button } from '@/components/ui/atoms'
import { MdArrowForward } from 'react-icons/md'

export const FormContactUs = () => {
    const { form, handleSubmit, loading, formSend, setFormSend } =
        useContactUsHook()

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="w-full flex flex-col gap-4"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Seu nome completo"
                                    {...field}
                                    label="Nome"
                                    isRequired
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="E-mail"
                                    {...field}
                                    label="exemple@exemple.com"
                                    isRequired
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="(XX) XXXXX-XXXX"
                                    {...field}
                                    label="Telefone"
                                    isRequired
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        const rawValue = e.target.value.replace(
                                            /\D/g,
                                            ''
                                        )
                                        if (rawValue.length <= 11) {
                                            field.onChange(
                                                maskPhone(e.target.value)
                                            )
                                        }
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="msg"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    label="Mensagem"
                                    rows={5}
                                    placeholder="Sua Mensagem"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="w-full md:w-fit">
                    <Button
                        className="w-full"
                        ui="primary"
                        endContent={<MdArrowForward color="white" />}
                        isLoading={loading}
                        type="submit"
                    >
                        {loading ? 'Enviando dados' : 'Enviar dados'}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
