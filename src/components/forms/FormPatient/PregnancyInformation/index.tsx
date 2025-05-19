'use client'

import React from 'react'
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from '@/components/ui/shadcn/form'
import { Input, RadioGroup, Radio } from '@nextui-org/react'
import { Button, Text } from '@/components/ui/atoms'
import { MdArrowForward } from 'react-icons/md'
import { usePatientPregnancyHook } from './FormPatientPregnancyHook'

export const FormPatientPregnancy = () => {
    const { form, handleSubmit, loading } = usePatientPregnancyHook()

    // Pegando o valor do tipo de contagem (D.M. ou D.C.)
    const selectedDateType = form.watch('date_contage_type')

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="w-full flex flex-col gap-4"
            >
                {/* Switch entre Data da Menstruação ou Data da Concepção */}

                <FormField
                    control={form.control}
                    name="babyName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Digite o nome do bebe (caso não tenha, deixar em branco)"
                                    {...field}
                                    label="Nome do Bebe"
                                    isRequired
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="date_contage_type"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl className="flex">
                                <RadioGroup
                                    {...field}
                                    onChange={(value) => field.onChange(value)}
                                    className="flex flex-row items-center gap-4" // Garante exibição horizontal
                                >
                                    <div className="flex gap-4">
                                        <Radio
                                            value="dm"
                                            className="flex items-center"
                                        >
                                            <Text.Content>
                                                Data da última Menstruação
                                            </Text.Content>
                                        </Radio>
                                        <Radio
                                            value="dc"
                                            className="flex items-center"
                                        >
                                            <Text.Content>
                                                Data da Concepção
                                            </Text.Content>
                                        </Radio>
                                    </div>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Campo: Data da Última Menstruação (mostra se selecionado "dm") */}
                {selectedDateType === 'dm' && (
                    <FormField
                        control={form.control}
                        name="last_menstruation_date"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Data da última menstruação"
                                        {...field}
                                        label="D.M."
                                        type="date"
                                        isRequired
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}

                {/* Campo: Data da Concepção (mostra se selecionado "dc") */}
                {selectedDateType === 'dc' && (
                    <FormField
                        control={form.control}
                        name="conception_date"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Data da concepção"
                                        {...field}
                                        type="date"
                                        label="D.C."
                                        isRequired
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}

                <FormField
                    control={form.control}
                    name="deliveryType"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl className="flex">
                                <RadioGroup
                                    {...field}
                                    onChange={(value) => field.onChange(value)}
                                    className="flex flex-row items-center gap-4" // Garante exibição horizontal
                                >
                                    <Text.Content>Tipo de parto</Text.Content>
                                    <div className="flex gap-4">
                                        <Radio
                                            value="normal"
                                            className="flex items-center"
                                        >
                                            <Text.Content>Normal</Text.Content>
                                        </Radio>
                                        <Radio
                                            value="cesarea"
                                            className="flex items-center"
                                        >
                                            <Text.Content>Cesária</Text.Content>
                                        </Radio>
                                    </div>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="expected_pregnancy_date"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="date"
                                    placeholder="Data prevista de parto"
                                    {...field}
                                    label="Data prevista de parto"
                                    isRequired
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="complications"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Digite as complicações"
                                    {...field}
                                    label="Complicações"
                                    isRequired
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Observações e anotações"
                                    {...field}
                                    label="Observações e anotações"
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
