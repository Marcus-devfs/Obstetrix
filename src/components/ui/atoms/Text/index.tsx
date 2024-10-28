import { ChildrenWithClassName } from '@/helpers/typesAndInterfaces'

const H1: React.FC<ChildrenWithClassName> = ({ children, className = '' }) => {
    return (
        <h1
            className={`text-[24px] md:text-5xl font-semibold text-center md:text-start ${className}`}
        >
            {children}
        </h1>
    )
}

const H2: React.FC<ChildrenWithClassName> = ({ children, className = '' }) => {
    return (
        <h2
            className={`text-[18px] md:text-[24px] font-semibold text-center md:text-start ${className}`}
        >
            {children}
        </h2>
    )
}

const H3: React.FC<ChildrenWithClassName> = ({ children, className = '' }) => {
    return (
        <h3
            className={`text-[16px] font-semibold text-center md:text-start ${className}`}
        >
            {children}
        </h3>
    )
}

const Content: React.FC<ChildrenWithClassName> = ({
    children,
    className = '',
}) => {
    return (
        <p
            className={`text-[14px] font-light text-center md:text-start ${className}`}
        >
            {children}
        </p>
    )
}

const LightButton: React.FC<ChildrenWithClassName> = ({
    children,
    className = '',
}) => {
    return (
        <p
            className={`text-[14px] font-light text-center md:text-start ${className}`}
        >
            {children}
        </p>
    )
}

const Stick: React.FC<ChildrenWithClassName> = ({
    children,
    className = '',
}) => {
    return (
        <p
            className={`text-[12px] font-light text-center md:text-start ${className}`}
        >
            {children}
        </p>
    )
}

const Customize: React.FC<ChildrenWithClassName> = ({
    children,
    className = '',
}) => {
    return <p className={className}>{children}</p>
}

const Button: React.FC<ChildrenWithClassName> = ({
    children,
    className = '',
}) => {
    return (
        <p
            className={`text-[14px] font-normal text-center md:text-start ${className}`}
        >
            {children}
        </p>
    )
}

export const Text = {
    H1,
    H2,
    H3,
    Content,
    Stick,
    LightButton,
    Button,
    Customize,
}
