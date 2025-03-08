'use client'

import { useState } from 'react'
import { Table, HeaderTable } from '@/components/ui/organisms/Table/index'
import { Checkbox } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { Edit, Trash } from 'lucide-react'
import Image from 'next/image'
import { Text } from '@/components/ui/atoms'
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useRouter } from 'next/navigation'

interface Patient {
    id: number
    name: string
    email: string
    avatar: string
    telephone: string
    lastVisit: string
}

interface Row {
    original: Patient
}

const patients: Patient[] = [
    {
        id: 1,
        name: 'Dallila Almeida',
        email: 'dallila.almeida@email.com',
        telephone: '123456789',
        lastVisit: '2023-01-01',
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
        id: 2,
        name: 'Marcia Silva',
        email: 'marcia.silva@email.com',
        telephone: '123456789',
        lastVisit: '2023-01-01',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        id: 3,
        name: 'Maria Silva',
        email: 'maria.silva@email.com',
        telephone: '123456789',
        lastVisit: '2023-01-01',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
]

export const PatientsList = () => {
    const [selectedPatients, setSelectedPatients] = useState<number[]>([])
    const router = useRouter()

    const toggleSelectUser = (id: number) => {
        setSelectedPatients((prev) =>
            prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
        )
    }

    const columns = [
        {
            id: 'select',
            header: <Checkbox aria-label="Selecionar Todos" />,
            cell: ({ row }: { row: Row }) => (
                <Checkbox
                    isSelected={selectedPatients.includes(row.original.id)}
                    onChange={() => toggleSelectUser(row.original.id)}
                    aria-label={`Selecionar ${row.original.name}`}
                />
            ),
        },
        {
            id: 'user',
            header: 'Paciente',
            cell: ({ row }: { row: Row }) => (
                <div className="flex items-center gap-3">
                    <Image
                        src={row.original.avatar}
                        alt={row.original.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <Text.Content>{row.original.name}</Text.Content>
                </div>
            ),
        },
        {
            id: 'telephone',
            header: 'Telefone',
            cell: ({ row }: { row: Row }) => (
                <div className="flex items-center gap-3">
                    <FaWhatsapp />
                    <Text.Content>{row.original.telephone}</Text.Content>
                </div>
            ),
        },
        {
            id: 'email',
            header: 'Email',
            cell: ({ row }: { row: Row }) => (
                <div className="flex items-center gap-3">
                    <MdEmail />
                    <Text.Content>{row.original.email}</Text.Content>
                </div>
            ),
        },
        {
            id: 'lastVisit',
            header: 'Ultima visita',
            cell: ({ row }: { row: Row }) => (
                <Text.Content>{row.original.lastVisit}</Text.Content>
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
        console.log('Filtrar Paciente')
    }

    const handleAddUser = () => {
        router.push('/pacientes/novo')
    }

    return (
        <div className="w-full px-2 pt-4">
            <HeaderTable
                title="Total de Pacientes"
                count={patients.length}
                onFilterClick={handleFilter}
                onAddClick={handleAddUser}
            />
            <Table columns={columns} data={patients} />
        </div>
    )
}
