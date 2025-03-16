'use client'

import { signIn, signOut } from 'next-auth/react'
import { FormLogin } from '@/components/forms'
import { Text, Logo, SocialButton } from '@/components/ui/atoms'
import {
    ContainerWrapper,
    PageWrapper,
    SectionWrapper,
} from '@/components/wrappers'
import { useSearchParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function LoginPage() {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')
    const code = searchParams.get('code')
    const { data: session } = useSession()
    return (
        <PageWrapper className="!h-screen items-center justify-center">
            <SectionWrapper>
                <ContainerWrapper className="flex items-center justify-center">
                    <div className="flex w-full max-w-5xl rounded-xl overflow-hidden shadow-lg">
                        <div className="w-full bg-white p-6 flex flex-col gap-4">
                            <div className="flex items-center justify-center">
                                <Logo />
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <Text.H2 className="text-center">
                                    Faça login em sua conta
                                </Text.H2>
                                <Text.Content>
                                    Bem vindo! Selecione o método de login
                                </Text.Content>
                                <SocialButton
                                    onClick={async () =>
                                        await signIn('google', {
                                            redirectTo: '/dashboard',
                                        })
                                    }
                                />
                                <div className="flex items-center gap-4 w-full">
                                    <div className="h-[1px] w-full bg-gray-300" />
                                    <Text.Content className="w-full text-center text-nowrap">
                                        ou continue com seu e-mail
                                    </Text.Content>
                                    <div className="h-[1px] w-full bg-gray-300" />
                                </div>
                                <FormLogin />
                                <div className="flex gap-2 items-center">
                                    <Text.Content>
                                        Não possui conta?
                                    </Text.Content>
                                    <Text.LightButton>
                                        <a
                                            href="/register"
                                            className="text-primary"
                                        >
                                            Cadastre-se
                                        </a>
                                    </Text.LightButton>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex w-full bg-primary p-4 items-center justify-center">
                            <Text.H1 className="text-white">Obstetrix</Text.H1>
                        </div>
                    </div>
                </ContainerWrapper>
            </SectionWrapper>
        </PageWrapper>
    )
}
