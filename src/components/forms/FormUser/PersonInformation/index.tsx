'use client'

import React from 'react'
import { maskPhone } from '@/helpers/utils'

import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from '@/components/ui/shadcn/form'
import { Input, Select, SelectItem } from '@nextui-org/react'
import { Button } from '@/components/ui/atoms'
import { MdArrowForward } from 'react-icons/md'
import { useUserInformationHook } from './FormUserHook'
import { clinics } from '@/helpers/mockups'

export const FormUserInformation = () => {
    const { form, handleSubmit, loading } = useUserInformationHook()

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
                    name="clinicId"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Select
                                    label="Selecionar Clínica"
                                    isRequired
                                    selectedKeys={
                                        field.value ? [field.value] : []
                                    } // Garantindo que seja um array válido
                                    onSelectionChange={
                                        (keys) =>
                                            field.onChange(
                                                Array.from(keys)[0] ?? ''
                                            ) // Evita valores undefined
                                    }
                                >
                                    {clinics.map((clinic) => (
                                        <SelectItem
                                            key={clinic.clinicId}
                                            value={clinic.clinicId}
                                        >
                                            {clinic.clinicName}
                                        </SelectItem>
                                    ))}
                                </Select>
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
                        {loading ? 'Salvando dados' : 'Salvar dados'}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
