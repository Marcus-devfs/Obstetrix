import React from 'react'
import { ChildrenWithClassName } from '@/helpers/typesAndInterfaces'

export const PageWrapper: React.FC<ChildrenWithClassName> = ({
    children,
    className = '',
}) => {
    return (
        <div className={`flex w-full h-full flex-col gap-4 ${className}`}>
            {children}
        </div>
    )
}
