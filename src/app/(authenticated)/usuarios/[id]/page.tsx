'use client'

import { Navbar } from '@/components/layouts'
import { UserDetails } from '@/components/pages/Users'
import { Breadcrumb } from '@/components/ui/organisms'
import { useParams } from 'next/navigation'

export default function UserDetailPage() {
    console.log('User', useParams())
    return (
        <div>
            <Navbar title="Usuário" />
            <Breadcrumb
                items={[
                    { href: '/usuarios', label: 'Usuários' },
                    { href: '/usuarios/novo', label: 'Novo Usuário' },
                ]}
            />
            <UserDetails id={`new`} />
        </div>
    )
}
