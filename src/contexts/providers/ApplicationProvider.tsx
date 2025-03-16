'use client'
import { ChildrenProps } from '@/helpers/typesAndInterfaces'
import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'

export const ApplicationProvider: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <SessionProvider>
            <NextUIProvider>{children}</NextUIProvider>
        </SessionProvider>
    )
}
