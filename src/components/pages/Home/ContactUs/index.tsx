import { Text } from '@/components/ui/atoms'
import {
    SectionWrapper,
    ContainerWrapper,
    CardWrapper,
} from '@/components/wrappers'

import { FormContactUs } from '@/components/forms'

export const ContactUs = () => {
    return (
        <SectionWrapper id="contact-us">
            <ContainerWrapper>
                <CardWrapper className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col gap-4 items-center md:items-start justify-center w-full md:w-11/12">
                            <Text.H2>Fale Conosco</Text.H2>
                            <Text.Content>
                                Leveraging the power of deep learning, our tools
                                provide accurate and comprehensive analysis of
                                patient data post-medical checkup Leveraging the
                                power of deep learning, our tools provide
                                accurate and comprehensive analysis of patient
                                data post-medical checkup
                            </Text.Content>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <FormContactUs />
                    </div>
                </CardWrapper>
            </ContainerWrapper>
        </SectionWrapper>
    )
}
