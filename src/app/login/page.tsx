import { FormLogin } from '@/components/forms'
import { SocialLoginButtons, Text } from '@/components/ui/atoms'
import { CardWrapper, ContainerWrapper } from '@/components/wrappers'
import { GiWireframeGlobe } from 'react-icons/gi'

export default function LoginPage() {
    return (
        <div className="bg-body w-screen h-screen flex">
            <ContainerWrapper className="flex items-center justify-center">
                <div className="flex w-full max-w-5xl rounded-xl overflow-hidden shadow-lg">
                    <div className="w-full bg-white p-6 flex flex-col gap-4">
                        <div className="flex items-center justify-start pl-12 py-6">
                            <GiWireframeGlobe
                                color="#3b82f6"
                                size={30}
                                className="mr-1"
                            />
                            <Text.H3 className="hidden md:block">
                                Obstetrix
                            </Text.H3>
                            <Text.Customize>PRO</Text.Customize>
                            <span className="text-primary text-lg font-semibold">
                                *
                            </span>
                        </div>

                        <div className="flex flex-col gap-4 items-center justify-center pb-20">
                            <Text.H2>Login in to your Account</Text.H2>
                            <Text.Content>
                                Welcome back! Select method to log in:
                            </Text.Content>

                            <div className="p-3 w-full px-14">
                                <SocialLoginButtons />
                            </div>

                            <div className="flex items-center gap-4 w-full px-14">
                                <div className="h-[1px] w-full bg-gray-300" />
                                <Text.Content className="w-full text-center text-nowrap">
                                    or continue with email
                                </Text.Content>
                                <div className="h-[1px] w-full bg-gray-300" />
                            </div>
                            <div className="w-full px-14">
                                <FormLogin />
                            </div>

                            <Text.Content className="flex gap-2 items-center">
                                Don&apos;t have an account?{' '}
                                <Text.LightButton>
                                    <a
                                        href="/register"
                                        className="text-primary"
                                    >
                                        Sign up
                                    </a>
                                </Text.LightButton>{' '}
                            </Text.Content>
                        </div>
                    </div>

                    <div className="w-full bg-primary p-4 flex items-center justify-center">
                        <Text.H1 className="text-white">Obstetrix</Text.H1>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    )
}
