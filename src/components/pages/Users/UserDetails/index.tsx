'use client'

import { Button, Text } from '@/components/ui/atoms'
import Image from 'next/image'
import { useState } from 'react'
import { InformationUser } from './Information'
import { EllipsisVertical, Option } from 'lucide-react'
import { Permissions } from './Permissions'

interface UserDetailsProps {
    id: number
    name: string
    email: string
    avatar: string
    telephone: string
    lastVisit: string
}

const userHeaderPatient = [
    {
        label: 'Informações',
        select: 'information',
    },
    {
        label: 'Permissões',
        select: 'permissions',
    },
]

export const UserDetails = ({ id }: { id: string | string[] | undefined }) => {
    const [userData, setUserData] = useState<UserDetailsProps>({
        id: 1,
        name: 'Marcus Silva',
        email: 'marcus.silva@email.com',
        telephone: '123456789',
        lastVisit: '2023-01-01',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    })
    const [selectedMenu, setSelectedMenu] = useState('information')

    if (!id) {
        return <div>Loading...</div>
    }

    const handleMenuClick = (menu: string) => {
        setSelectedMenu(menu)
    }

    return (
        <div className="w-full px-2 pt-4">
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                    <Image
                        src={userData.avatar}
                        alt={userData.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                    />
                    <Text.H3>{userData.name}</Text.H3>
                </div>
                <div className="flex items-center gap-2">
                    <Button ui="primary">Salvar</Button>
                    <Button
                        isIconOnly
                        color="secondary"
                        className="border border-gray"
                    >
                        <EllipsisVertical className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            <div className="flex">
                {userHeaderPatient.map((item, index) => {
                    const isSelected = selectedMenu === item.select
                    return (
                        <button
                            key={`${item.select}-${index}`}
                            className={`px-4 py-2 border-b-2 border-b-2 hover:border-blue-500 focus:outline-none ${isSelected ? 'text-blue-500 border-blue-500' : 'border-gray-200 text-gray-400'}`}
                            onClick={() => handleMenuClick(item.select)}
                        >
                            {item.label}
                        </button>
                    )
                })}
            </div>

            <div className="pt-8">
                {selectedMenu === 'information' && <InformationUser />}
                {selectedMenu === 'permissions' && <Permissions />}
            </div>
        </div>
    )
}
