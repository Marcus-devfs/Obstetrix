'use client'

import { useState } from 'react'
import { Button, Text } from '@/components/ui/atoms'
import { MdArrowForward } from 'react-icons/md'
import { dataMenuLp } from '@/helpers/mockups'
import { itemMenuLpProps } from '@/helpers/typesAndInterfaces'
import { SectionWrapper, ContainerWrapper } from '@/components/wrappers'
import { GiWireframeGlobe } from 'react-icons/gi'

export const HeaderLp = () => {
    return (
        <SectionWrapper>
            <ContainerWrapper>
                <div className="w-full py-4 flex items-center justify-between">
                    <div className="flex items-center justify-center">
                        <GiWireframeGlobe
                            color="#3b82f6"
                            size={30}
                            className="mr-1"
                        />
                        <Text.H3>Obstetrix</Text.H3>
                        <span className="text-primary text-lg font-semibold">
                            *
                        </span>
                    </div>
                    <Navigator />
                    <Button
                        ui="primary"
                        endContent={<MdArrowForward color="white" />}
                    >
                        Quero Assinar
                    </Button>
                </div>
            </ContainerWrapper>
        </SectionWrapper>
    )
}

const Navigator = () => {
    const [itemActive, setItemActive] = useState<string>('home')
    return (
        <div className=" bg-white h-full rounded-full flex p-1">
            {dataMenuLp.map((item: itemMenuLpProps, index: number) => (
                <ItemNavigator
                    key={`itemNavigator-${index}`}
                    icon={
                        itemActive === item.value ? item.activeIcon : item.icon
                    }
                    active={itemActive === item.value}
                    title={item.title}
                    value={item.value}
                    onClick={(value: string) => setItemActive(value)}
                />
            ))}
        </div>
    )
}

interface ItemNavigatorProps {
    icon: React.ReactNode
    title: string
    value: string
    active?: boolean
    onClick?: (value: string) => void
}

const ItemNavigator: React.FC<ItemNavigatorProps> = ({
    icon,
    title,
    active = false,
    value,
    onClick = () => {},
}) => {
    return (
        <div
            className={`flex rounded-full group cursor-pointer items-center ${active && 'bg-blue-100'}`}
            onClick={() => onClick(value)}
        >
            <div
                className={`rounded-full p-2 h-10 w-10 flex justify-center items-center ${active && 'bg-primary'}`}
            >
                {icon}
            </div>
            <div className="pl-1 pr-4">
                <Text.Button
                    className={`${active ? '!text-primary' : '!text-gray-400'} group-hover:text-opacity-60`}
                >
                    {title}
                </Text.Button>
            </div>
        </div>
    )
}