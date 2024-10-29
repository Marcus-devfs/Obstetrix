'use client'

import Image from 'next/image'
import { Button, Text } from '@/components/ui/atoms'
import {
    SectionWrapper,
    ContainerWrapper,
    CardWrapper,
} from '@/components/wrappers'
import { MdArrowForward } from 'react-icons/md'
import image1 from '../../../../../public/banner1.png'
import image2 from '../../../../../public/banner2.png'
import image3 from '../../../../../public/banner3.png'

export const TertiarySection = () => {
    return (
        <SectionWrapper id="plataform">
            <ContainerWrapper>
                <CardWrapper className="flex flex-col gap-4">
                    <Text.Customize className="!text-primary text-[16px] md:text-[20px] font-semibold text-center md:text-start">
                        What We Do
                    </Text.Customize>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-4 w-full md:w-1/2 items-center md:items-start justify-center order-2 md:order-1">
                            <Text.H2>
                                Advanced Medical Insights for Optimal Patient
                                Care
                            </Text.H2>
                            <Text.Content>
                                Leveraging the power of deep learning, our tools
                                provide accurate and comprehensive analysis of
                                patient data post-medical checkup
                            </Text.Content>
                            <Button
                                ui="primary"
                                endContent={<MdArrowForward color="white" />}
                            >
                                Saiba mais
                            </Button>
                        </div>
                        <div className="flex w-full flex-col md:w-1/2 order-1 md:order-2">
                            <div className="w-full h-96">
                                <Image
                                    width={1280}
                                    height={600}
                                    src={image1}
                                    alt="banner"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex w-full flex-col md:w-1/2">
                            <div className="w-full h-96">
                                <Image
                                    width={1280}
                                    height={600}
                                    src={image2}
                                    alt="banner"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-1/2 items-center md:items-start justify-center">
                            <Text.H2>
                                Advanced Medical Insights for Optimal Patient
                                Care
                            </Text.H2>
                            <Text.Content>
                                Leveraging the power of deep learning, our tools
                                provide accurate and comprehensive analysis of
                                patient data post-medical checkup
                            </Text.Content>
                            <Button
                                ui="primary"
                                endContent={<MdArrowForward color="white" />}
                            >
                                Saiba mais
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-4 w-full md:w-1/2 items-center md:items-start justify-center order-2 md:order-1">
                            <Text.H2>
                                Advanced Medical Insights for Optimal Patient
                                Care
                            </Text.H2>
                            <Text.Content>
                                Leveraging the power of deep learning, our tools
                                provide accurate and comprehensive analysis of
                                patient data post-medical checkup
                            </Text.Content>
                            <Button
                                ui="primary"
                                endContent={<MdArrowForward color="white" />}
                            >
                                Saiba mais
                            </Button>
                        </div>
                        <div className="flex w-full flex-col md:w-1/2 order-1 md:order-2">
                            <div className="w-full h-96">
                                <Image
                                    width={1280}
                                    height={600}
                                    src={image3}
                                    alt="banner"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </CardWrapper>
            </ContainerWrapper>
        </SectionWrapper>
    )
}
