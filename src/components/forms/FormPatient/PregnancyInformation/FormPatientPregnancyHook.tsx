import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const usePatientPregnancyHook = () => {
    const FormSchema = z.object({
        conception_date: z.string().optional(),
        last_menstruation_date: z.string().optional(),
        date_contage_type: z.enum(['dm', 'dc'], {
            message: 'Selecione o tipo de contagem',
        }),
        expected_pregnancy_date: z.string().optional(),
        isActive: z.boolean().optional(),
        babyName: z.string().min(3, {
            message: 'O nome deve conter ao menos 3 caracteres',
        }),
        notes: z.string().optional(),
        deliveryType: z.enum(['normal', 'cesarea'], {
            message: 'Selecione o tipo de delivery',
        }),
        complications: z.string().optional(),
    })

    const [loading, setLoading] = useState(false)
    const [formSend, setFormSend] = useState<boolean | null>(null)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            conception_date: '',
            last_menstruation_date: '',
            date_contage_type: 'dm', // Valor padrão
            expected_pregnancy_date: '',
            isActive: true,
            babyName: '',
            notes: '',
            deliveryType: 'normal',
            complications: '',
        },
    })

    async function handleSubmit(data: z.infer<typeof FormSchema>) {
        setLoading(true)
        console.log(data)
        setLoading(false)
    }

    return {
        form,
        handleSubmit,
        loading,
        formSend,
        setFormSend,
    }
}
