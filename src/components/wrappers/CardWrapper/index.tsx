import { ChildrenWithClassName } from '@/helpers/typesAndInterfaces'

export const CardWrapper: React.FC<ChildrenWithClassName> = ({
    children,
    className = '',
}) => {
    return (
        <div
            className={`w-full rounded-xl border-gray-100 bg-white p-4 md:p-12 ${className}`}
        >
            {children}
        </div>
    )
}
