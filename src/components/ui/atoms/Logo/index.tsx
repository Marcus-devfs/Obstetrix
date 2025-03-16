import { Text } from '../Text'
import { GiWireframeGlobe } from 'react-icons/gi'

export const Logo = () => {
    return (
        <div className="flex items-center justify-start">
            <GiWireframeGlobe color="#3b82f6" size={30} className="mr-1" />
            <Text.H3 className="hidden md:block">Obstetrix</Text.H3>
            <Text.Customize>PRO</Text.Customize>
            <span className="text-primary text-lg font-semibold">*</span>
        </div>
    )
}
