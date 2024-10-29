'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button, Text } from '@/components/ui/atoms'
import {
    SectionWrapper,
    ContainerWrapper,
    CardWrapper,
} from '@/components/wrappers'
import { CardImage } from '@/components/ui/molecules'
import { MdArrowForward } from 'react-icons/md'
import { dataImageBannerPrincipal } from '@/helpers/mockups'
import image1 from '../../../../../public/image1.png'

export const PrimarySection = () => {
    type imageProps = {
        src: string | StaticImageData
        index: number
    }

    const [activeImage, setActiveImage] = useState<imageProps>({
        src: image1,
        index: 0,
    })

    return (
        <SectionWrapper id="home">
            <ContainerWrapper>
                <CardWrapper className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-4 w-full md:w-1/2 items-center md:items-start justify-center">
                        <Text.H1>
                            Advanced Medical Insights for Optimal Patient Care
                        </Text.H1>
                        <Text.Content>
                            Leveraging the power of deep learning, our tools
                            provide accurate and comprehensive analysis of
                            patient data post-medical checkup
                        </Text.Content>
                        <div className="flex gap-2">
                            <Button
                                ui="primary"
                                endContent={<MdArrowForward color="white" />}
                            >
                                Quero Assinar
                            </Button>
                            <Button ui="secondary">Saiba Mais</Button>
                        </div>
                    </div>
                    <div className="flex w-full flex-col md:w-1/2">
                        <div className="w-full h-96">
                            <Image
                                width={1280}
                                height={600}
                                src={activeImage.src}
                                alt="banner"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex gap-2 justify-center">
                            {dataImageBannerPrincipal.map(
                                (
                                    item: string | StaticImageData,
                                    index: number
                                ) => (
                                    <CardImage
                                        src={item}
                                        key={`card-image-${index}`}
                                        active={index === activeImage.index}
                                        onClick={() =>
                                            setActiveImage({
                                                src: item,
                                                index,
                                            })
                                        }
                                    />
                                )
                            )}
                        </div>
                    </div>
                </CardWrapper>
            </ContainerWrapper>
        </SectionWrapper>
    )
}
