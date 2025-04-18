import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'

export const useLoginHook = () => {
    const FormSchema = z.object({
        email: z.string().email({
            message: 'O email deve ser válido',
        }),
        password: z.string().min(6, {
            message: 'A senha deve conter ao menos 6 caracteres',
        }),
    })

    const [loading, setLoading] = useState(false)
    const [formSend, setFormSend] = useState<boolean | null>(null)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: 'marcusvini6277@gmail.com',
            password: '12345678',
        },
    })

    async function handleSubmit(data: z.infer<typeof FormSchema>) {
        try {
            setLoading(true)
            await signIn('credentials', { redirectTo: '/dashboard', ...data })
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    return {
        form,
        handleSubmit,
        loading,
        formSend,
        setFormSend,
    }
}
