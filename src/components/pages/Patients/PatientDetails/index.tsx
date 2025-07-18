'use client'

import { Text } from '@/components/ui/atoms'
import Image from 'next/image'
import { useState } from 'react'
import { InformationPatient } from './Information'
import { ClinicData } from './ClinicData'
import { PregnancyPatient } from './Pregnancy'

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
        label: 'Informações Pessoais',
        select: 'information',
    },
    {
        label: 'Dados Clinicos',
        select: 'clinic',
    },
    {
        label: 'Gestação',
        select: 'pregnancy',
    },
    {
        label: 'Consultas',
        select: 'consults',
    },
]

export const PatientDetails = ({
    id,
}: {
    id: string | string[] | undefined
}) => {
    const [patient, setPatient] = useState<Patient>({
        id: 1,
        name: 'Renata Silva',
        email: 'renata.silva@email.com',
        telephone: '123456789',
        lastVisit: '2023-01-01',
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    })
    const [selectedMenu, setSelectedMenu] = useState('information')

    if (!id) {
        return <div>Loading...</div>
    }

    const handleMenuClick = (menu: string) => {
        setSelectedMenu(menu)
    }

    return (
        <div className="flex flex-col h-screen px-2 pt-4">
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

            <div className="flex border-b">
                {menuHeaderPatient.map((item, index) => {
                    const isSelected = selectedMenu === item.select
                    return (
                        <button
                            key={`${item.select}-${index}`}
                            className={`px-4 py-2 border-b-2 hover:border-blue-500 focus:outline-none ${
                                isSelected
                                    ? 'text-blue-500 border-blue-500'
                                    : 'border-transparent text-gray-400'
                            }`}
                            onClick={() => handleMenuClick(item.select)}
                        >
                            {item.label}
                        </button>
                    )
                })}
            </div>

            <div className="flex-1 overflow-y-auto pt-8">
                {selectedMenu === 'information' && <InformationPatient />}
                {selectedMenu === 'clinic' && <ClinicData />}
                {selectedMenu === 'pregnancy' && <PregnancyPatient />}
            </div>
        </div>
    )
}
