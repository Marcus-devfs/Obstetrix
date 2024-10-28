import { PageWrapper } from '@/components/wrappers'
import { PrimarySection } from './PrimarySection'
import { AboutUs } from './AboutUs'
import { SecondarySection } from './SecondarySection'

export const HomePage = () => {
    return (
        <PageWrapper className="pb-4">
            <PrimarySection />
            <AboutUs />
            <SecondarySection />
            <PrimarySection />
        </PageWrapper>
    )
}
