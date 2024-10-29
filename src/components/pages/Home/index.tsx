import { PageWrapper } from '@/components/wrappers'
import { PrimarySection } from './PrimarySection'
import { TertiarySection } from './TertiarySection'
import { AboutUs } from './AboutUs'
import { SecondarySection } from './SecondarySection'
import { ContactUs } from './ContactUs'

export const HomePage = () => {
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
