import { PageWrapper } from '@/components/wrappers'
import {
    AboutUs,
    PrimarySection,
    SecondarySection,
    TertiarySection,
    ContactUs,
} from '@/components/pages/Home'

const HomePage = () => {
    return (
        <PageWrapper className="pb-4">
            <PrimarySection />
            <AboutUs />
            <SecondarySection />
            <TertiarySection />
            <ContactUs />
        </PageWrapper>
    )
}

export default HomePage
