'use client'

import { Text } from '@/components/ui/atoms'
import Image from 'next/image'
import { useState } from 'react'
import { InformationPatient } from './Information'

interface Patient {
    id: number
    name: string
    email: string
    avatar: string
    telephone: string
    lastVisit: string
}

const menuHeaderPatient = [
    {
        label: 'Informações',
        select: 'information',
    },
    {
        label: 'Agendamentos',
        select: 'appointments',
    },
]

export const PatientDetails = ({
    id,
}: {
    id: string | string[] | undefined
}) => {
    const [patient, setPatient] = useState<Patient>({
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
            <div className="flex items-center gap-3 py-4">
                <Image
                    src={patient.avatar}
                    alt={patient.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                />
                <Text.H3>{patient.name}</Text.H3>
            </div>

            <div className="flex">
                {menuHeaderPatient.map((item, index) => {
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
                {selectedMenu === 'information' && <InformationPatient />}
            </div>
        </div>
    )
}
