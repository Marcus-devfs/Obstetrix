export interface ChildrenProps {
    children: React.ReactNode
}

export interface ClassNameProps {
    className?: string
}

export interface ChildrenWithClassName extends ChildrenProps, ClassNameProps {}

export type itemMenuLpProps = {
    value: string
    title: string
    icon: React.ReactNode
    activeIcon: React.ReactNode
}
