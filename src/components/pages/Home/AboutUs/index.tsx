import { Text } from '@/components/ui/atoms'
import {
    SectionWrapper,
    ContainerWrapper,
    CardWrapper,
} from '@/components/wrappers'

export const AboutUs = () => {
    return (
        <SectionWrapper>
            <ContainerWrapper>
                <CardWrapper className="flex gap-4">
                    <div className="flex flex-col gap-4 w-full md:w-1/2 items-center md:items-start justify-center">
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
