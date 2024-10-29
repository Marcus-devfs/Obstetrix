import { Text } from '@/components/ui/atoms'
import { ContainerWrapper, SectionWrapper } from '@/components/wrappers'
import Link from 'next/link'
import { GiWireframeGlobe } from 'react-icons/gi'

export const FooterLp = () => {
    return (
        <SectionWrapper className="mb-4">
            <ContainerWrapper>
                <div className="bg-primary w-full rounded-xl rounded-tr-xl p-4 md:p-12 flex flex-col gap-4 md:gap-8">
                    <div className="flex justify-between gap-4">
                        <Text.Customize className="text-[20px] md:text-4xl font-normal text-white w-full md:w-1/2">
                            Smart Diagnostics for a Healthier Tomorrow
                        </Text.Customize>
                        <div className="flex items-center justify-center">
                            <GiWireframeGlobe
                                color="white"
                                size={30}
                                className="mr-1"
                            />
                            <Text.H3 className="text-white">Obstetrix</Text.H3>
                            <Text.Customize>PRO</Text.Customize>
                            <span className="text-white text-lg font-semibold">
                                *
                            </span>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-gray-300" />
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div className="flex gap-4 justify-center">
                            <Link href="" className="group">
                                <Text.Content className="text-white group-hover:underline">
                                    Politica de privacidade
                                </Text.Content>
                            </Link>
                            <Link href="" className="group">
                                <Text.Content className="text-white group-hover:underline">
                                    Termos & Condições
                                </Text.Content>
                            </Link>
                        </div>
                        <Text.Stick className="text-white">
                            @2024 - Todos os diretos reservados
                        </Text.Stick>
                    </div>
                </div>
            </ContainerWrapper>
        </SectionWrapper>
    )
}
