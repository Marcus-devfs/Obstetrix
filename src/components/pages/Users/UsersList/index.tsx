'use client'

import { useState } from 'react'
import { Table, HeaderTable } from '@/components/ui/organisms/Table/index'
import { Checkbox } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { Edit, Trash } from 'lucide-react'
import Image from 'next/image'

const users = [
    {
        id: 1,
        name: 'João Silva',
        email: 'joao@email.com',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        id: 2,
        name: 'Maria Oliveira',
        email: 'maria@email.com',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
]

export const UsersList = () => {
    const [selectedUsers, setSelectedUsers] = useState<number[]>([])

    const toggleSelectUser = (id: number) => {
        setSelectedUsers((prev) =>
            prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
        )
    }

    const columns = [
        {
            id: 'select',
            header: <Checkbox aria-label="Selecionar Todos" />,
            cell: ({ row }: any) => (
                <Checkbox
                    isSelected={selectedUsers.includes(row.original.id)}
                    onChange={() => toggleSelectUser(row.original.id)}
                    aria-label={`Selecionar ${row.original.name}`}
                />
            ),
        },
        {
            id: 'user',
            header: 'Usuário',
            cell: ({ row }: any) => (
                <div className="flex items-center gap-3">
                    <Image
                        src={row.original.avatar}
                        alt={row.original.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <span>{row.original.name}</span>
                </div>
            ),
        },
        {
            id: 'email',
            header: 'Email',
            cell: ({ row }: any) => <span>{row.original.email}</span>,
        },
        {
            id: 'actions',
            header: 'Ações',
            cell: ({ row }: any) => (
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
        console.log('Filtrar Usuários')
    }

    const handleAddUser = () => {
        console.log('Adicionar Usuário')
    }

    return (
        <div className="w-full px-2 pt-4">
            <HeaderTable
                title="Total de Usuários"
                count={users.length}
                onFilterClick={handleFilter}
                onAddClick={handleAddUser}
            />
            <Table columns={columns} data={users} />
        </div>
    )
}
