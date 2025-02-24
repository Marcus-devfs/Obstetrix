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
            className={`text-[20px] md:text-3xl font-semibold text-center md:text-start ${className}`}
        >
            {children}
        </h2>
    )
}

const H3: React.FC<ChildrenWithClassName> = ({ children, className = '' }) => {
    return (
        <h3
            className={`text-[16px] md:text-xl font-semibold text-center md:text-start ${className}`}
        >
            {children}
        </h3>
    )
}

const H4: React.FC<ChildrenWithClassName> = ({ children, className = '' }) => {
    return (
        <h4
            className={`text-[15px] font-semibold text-center md:text-start ${className}`}
        >
            {children}
        </h4>
    )
}

const Content: React.FC<ChildrenWithClassName> = ({
    children,
    className = '',
}) => {
    return (
        <p
            className={`text-[13px] font-light text-center md:text-start ${className}`}
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
    H4,
    Content,
    Stick,
    LightButton,
    Button,
    Customize,
}
