import { Text } from '@/components/ui/atoms'
import {
    SectionWrapper,
    ContainerWrapper,
    CardWrapper,
} from '@/components/wrappers'

export const AboutUs = () => {
    return (
        <SectionWrapper id="about-us">
            <ContainerWrapper>
                <CardWrapper className="flex flex-col md:flex-row gap-4">
                    <div className="flex w-full md:w-1/2 items-center justify-center md:justify-start">
                        <Text.H2>About Us</Text.H2>
                    </div>
                    <div className="flex w-full flex-col md:w-1/2">
                        <Text.Content className="!font-normal">
                            Our mission is to empower healthcare poviders with
                            precise, comprehensive, and actionable insights
                            using the latest advancements in deep learning and
                            artificial intelligence, mission is to empower
                            healthcare poviders with precise, comprehensive, and
                            actionable insights
                        </Text.Content>
                    </div>
                </CardWrapper>
            </ContainerWrapper>
        </SectionWrapper>
    )
}
