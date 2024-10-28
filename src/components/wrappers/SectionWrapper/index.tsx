import React from 'react'
import { ChildrenWithClassName } from '@/helpers/typesAndInterfaces'

export const SectionWrapper: React.FC<ChildrenWithClassName> = ({
    children,
    className = '',
}) => {
    return (
        <div className={`flex w-full justify-center ${className}`}>
            <div className="w-full max-w-[1600px]">{children}</div>
        </div>
    )
}
