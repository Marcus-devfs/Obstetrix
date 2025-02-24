import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const useContactUsHook = () => {
    const FormSchema = z.object({
        name: z.string().min(3, {
            message: 'O nome deve conter ao menos 3 caracteres',
        }),
        email: z.string().email({
            message: 'O email deve ser válido',
        }),
        phone: z.string().min(11, {
            message: 'O número deve estar completo',
        }),
        msg: z.string().optional(),
    })

    const [loading, setLoading] = useState(false)
    const [formSend, setFormSend] = useState<boolean | null>(null)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            msg: '',
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
