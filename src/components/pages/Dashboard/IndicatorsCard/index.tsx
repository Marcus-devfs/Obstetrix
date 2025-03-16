import { Text } from '@/components/ui/atoms'
import React from 'react'

interface IndicatorsCardProps {
    title: string
    icon: React.ReactNode
    children: React.ReactNode
}

export const IndicatorsCard: React.FC<IndicatorsCardProps> = ({
    title,
    icon,
    children,
}) => {
    return (
        <div className="flex gap-6 bg-white p-4 rounded-lg shadow flex-col">
            <div className="flex items-center gap-4 ">
                <span>{icon}</span>
                <Text.Customize>{title}</Text.Customize>
            </div>
            {children}
        </div>
    )
}
