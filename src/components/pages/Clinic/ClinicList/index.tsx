'use client'

import { useState } from 'react'
import { Table, HeaderTable } from '@/components/ui/organisms/Table/index'
import { Checkbox } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { Edit, Trash } from 'lucide-react'
import Image from 'next/image'
import { Text } from '@/components/ui/atoms'
import { MdEmail } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { Clinic } from '@/helpers/typesAndInterfaces'
import { clinics } from '@/helpers/mockups'

interface Row {
    original: Clinic
}

export const ClinicList = () => {
    const [selectedClinic, setSelectedClinic] = useState<string[]>([])
    const router = useRouter()

    const toggleSelectUser = (id: string) => {
        setSelectedClinic((prev) =>
            prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
        )
    }

    const columns = [
        {
            id: 'select',
            header: <Checkbox aria-label="Selecionar Todos" />,
            cell: ({ row }: { row: Row }) => (
                <Checkbox
                    isSelected={selectedClinic.includes(row.original.clinicId)}
                    onChange={() => toggleSelectUser(row.original.clinicId)}
                    aria-label={`Selecionar ${row.original.clinicName}`}
                />
            ),
        },
        {
            id: 'clinic',
            header: 'Clínica',
            cell: ({ row }: { row: Row }) => (
                <div className="flex items-center gap-3">
                    <Image
                        src={row.original.avatar}
                        alt={row.original.clinicName}
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <Text.Content>{row.original.clinicName}</Text.Content>
                </div>
            ),
        },
        {
            id: 'clinic_responsible',
            header: 'Responsável',
            cell: ({ row }: { row: Row }) => (
                <div className="flex items-center gap-3">
                    <Text.Content>
                        {row.original.clinicResponsable}
                    </Text.Content>
                </div>
            ),
        },
        {
            id: 'clinic_contact',
            header: 'Contato',
            cell: ({ row }: { row: Row }) => (
                <div className="flex items-center gap-3">
                    <MdEmail />
                    <Text.Content>{row.original.clinicContact}</Text.Content>
                </div>
            ),
        },
        {
            id: 'actions',
            header: 'Ações',
            cell: ({ row }: { row: Row }) => (
                <div className="flex gap-2">
                    <Button variant="light" isIconOnly>
                        <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="light" color="danger" isIconOnly>
                        <Trash className="w-4 h-4" />
                    </Button>
                </div>
            ),
        },
    ]

    const handleFilter = () => {
        console.log('Filtrar Clinicas')
    }

    const handleAddClinic = () => {
        router.push('/clinica/novo')
    }

    return (
        <div className="w-full px-2 pt-4">
            <HeaderTable
                title="Total de Clinicas"
                count={clinics.length}
                onFilterClick={handleFilter}
                onAddClick={handleAddClinic}
            />
            <Table columns={columns} data={clinics} />
        </div>
    )
}
