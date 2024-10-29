import React from 'react'
import { ChildrenWithClassName } from '@/helpers/typesAndInterfaces'

interface thisProps extends ChildrenWithClassName {
    id?: string
}

export const SectionWrapper: React.FC<thisProps> = ({
    children,
    className = '',
    id,
}) => {
    return (
        <div className={`flex w-full justify-center ${className}`} id={id}>
            <div className="w-full max-w-[1600px]">{children}</div>
        </div>
    )
}
