import { FormLogin } from '@/components/forms'
import { SocialLoginButtons, Text } from '@/components/ui/atoms'
import { CardWrapper, ContainerWrapper } from '@/components/wrappers'

export default function LoginPage() {
    return (
        <div className="bg-body w-screen h-screen flex">
            <ContainerWrapper className="flex items-center justify-center">
                <div className="flex w-full max-w-5xl rounded-xl overflow-hidden shadow-lg">
                    <div className="w-full bg-white p-6 items-center justify-center flex flex-col gap-4 py-20">
                        <Text.H2>Login in to your Account</Text.H2>
                        <Text.Content>
                            Welcome back! Select method to log in:
                        </Text.Content>

                        <div className="p-3 w-full px-14">
                            <SocialLoginButtons />
                        </div>

                        <Text.Content>or continue with email</Text.Content>
                        <div className="w-full px-14">
                            <FormLogin />
                        </div>

                        <Text.Content className="flex gap-2 items-center">
                            Don&apos;t have an account?{' '}
                            <Text.LightButton>
                                <a href="/register" className="text-primary">
                                    Sign up
                                </a>
                            </Text.LightButton>{' '}
                        </Text.Content>
                    </div>

                    <div className="w-full bg-primary p-4 flex items-center justify-center">
                        <Text.H1 className="text-white">Obstetrix</Text.H1>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    )
}
