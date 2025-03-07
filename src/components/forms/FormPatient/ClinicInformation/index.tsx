'use client'

import React from 'react'
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from '@/components/ui/shadcn/form'
import { Input } from '@nextui-org/react'
import { Button } from '@/components/ui/atoms'
import { MdArrowForward } from 'react-icons/md'
import { usePatientClinicHook } from './FormPatientClinicHook'

export const FormPatientClinic = () => {
    const { form, handleSubmit, loading } = usePatientClinicHook()

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="w-full flex flex-col gap-4"
            >
                <FormField
                    control={form.control}
                    name="doctor_reference"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Nome do Doutor de referência"
                                    {...field}
                                    label="Doutor de Referência"
                                    isRequired
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="assistence_plan"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Seu plano assistencial"
                                    {...field}
                                    label="Plano Assistencial"
                                    isRequired
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
                        {loading ? 'Salvando dados' : 'Salvar dados'}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
