import { Text } from '@/components/ui/atoms'
import {
    ContainerWrapper,
    CardWrapper,
    SectionWrapper,
} from '@/components/wrappers'
import image1 from '../../../../../public/our.png'
import image2 from '../../../../../public/who.png'
import Image from 'next/image'

export const SecondarySection = () => {
    return (
        <SectionWrapper>
            <ContainerWrapper>
                <div className="flex flex-col md:flex-row gap-4">
                    <CardWrapper className="flex flex-col">
                        <div className="h-64">
                            <Image
                                width={1280}
                                height={600}
                                src={image1}
                                alt="banner1"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <Text.H2 className="!text-primary">Who We Are</Text.H2>
                        <Text.Content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla facilisi. Cras vitae sapien ac nulla
                            fermentum tincidunt. Fusce nec lorem a turpis
                            convallis facilisis. Sed eget ligula id metus
                            dignissim tempus ut at tortor.
                        </Text.Content>
                    </CardWrapper>
                    <CardWrapper className="flex flex-col">
                        <div className="h-64">
                            <Image
                                width={1280}
                                height={600}
                                src={image2}
                                alt="banner1"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <Text.H2 className="!text-primary">
                            Our Technology
                        </Text.H2>
                        <Text.Content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla facilisi. Cras vitae sapien ac nulla
                            fermentum tincidunt. Fusce nec lorem a turpis
                            convallis facilisis. Sed eget ligula id metus
                            dignissim tempus ut at tortor.
                        </Text.Content>
                    </CardWrapper>
                </div>
            </ContainerWrapper>
        </SectionWrapper>
    )
}
