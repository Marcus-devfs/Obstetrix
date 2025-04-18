import { ChildrenProps } from '@/helpers/typesAndInterfaces'
import { HeaderLp, FooterLp } from '@/components/layouts'

const Layout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <div className="flex h-screen flex-col bg-blue-100">
            <HeaderLp />
            <div className="overflow-y-auto" id="scroll-div">
                <div className="flex flex-1 justify-center">{children}</div>
                <FooterLp />
            </div>
        </div>
    )
}

export default Layout
