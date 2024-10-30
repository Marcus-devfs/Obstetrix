'use client'

import { useState } from 'react'
import { Button, Text } from '@/components/ui/atoms'
import { MdArrowForward } from 'react-icons/md'
import { dataMenuLp } from '@/helpers/mockups'
import { itemMenuLpProps } from '@/helpers/typesAndInterfaces'
import { SectionWrapper, ContainerWrapper } from '@/components/wrappers'
import { GiWireframeGlobe } from 'react-icons/gi'
import { FiDollarSign } from 'react-icons/fi'

export const HeaderLp = () => {
    return (
        <SectionWrapper>
            <ContainerWrapper>
                <div className="w-full py-4 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center justify-center">
                        <GiWireframeGlobe
                            color="#3b82f6"
                            size={30}
                            className="mr-1"
                        />
                        <Text.H3 className="hidden md:block">Obstetrix</Text.H3>
                        <Text.Customize>PRO</Text.Customize>
                        <span className="text-primary text-lg font-semibold">
                            *
                        </span>
                    </div>
                    <Navigator />
                    <Button
                        className="hidden md:flex"
                        ui="primary"
                        endContent={<MdArrowForward color="white" />}
                    >
                        Assinar
                    </Button>

                    <Button
                        isIconOnly
                        className="flex md:hidden w-fit"
                        ui="primary"
                    >
                        <FiDollarSign color="white" size={16} />
                    </Button>
                </div>
            </ContainerWrapper>
        </SectionWrapper>
    )
}

const Navigator = () => {
    const [itemActive, setItemActive] = useState<string>('home')

    const handleClick = (value: string) => {
        setItemActive(value)

        const element = document.getElementById(value)
        const scrollContainer = document.getElementById('scroll-div')

        if (element && scrollContainer) {
            const elementPosition =
                element.offsetTop - scrollContainer.offsetTop

            scrollContainer.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            })
        }
    }
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
                    onClick={(value: string) => handleClick(value)}
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
            <div className="hidden lg:block pl-1 pr-4">
                <Text.Button
                    className={`${active ? '!text-primary' : '!text-gray-400'} group-hover:text-opacity-60`}
                >
                    {title}
                </Text.Button>
            </div>
        </div>
    )
}
