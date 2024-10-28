'use client'
import { ChildrenProps } from '@/helpers/typesAndInterfaces'
import { NextUIProvider } from '@nextui-org/react'

export const ApplicationProvider: React.FC<ChildrenProps> = ({ children }) => {
    return <NextUIProvider>{children}</NextUIProvider>
}
