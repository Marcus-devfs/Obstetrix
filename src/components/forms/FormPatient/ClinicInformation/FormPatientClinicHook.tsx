import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const usePatientClinicHook = () => {
    const FormSchema = z.object({
        doctor_reference: z.string().min(3, {
            message: 'O doutor de referência deve conter ao menos 3 caracteres',
        }),
        assistence_plan: z.string().min(3, {
            message: 'O Plano de Assistência deve conter ao menos 3 caracteres',
        }),
    })

    const [loading, setLoading] = useState(false)
    const [formSend, setFormSend] = useState<boolean | null>(null)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            doctor_reference: '',
            assistence_plan: '',
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
