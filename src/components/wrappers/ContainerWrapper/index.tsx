import { ChildrenWithClassName } from '@/helpers/typesAndInterfaces'

export const ContainerWrapper: React.FC<ChildrenWithClassName> = ({
    children,
    className = '',
}) => {
    return <div className={`px-4 xl:px-12 w-full ${className}`}>{children}</div>
}
