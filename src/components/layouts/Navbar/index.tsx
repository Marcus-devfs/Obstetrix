'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { ChevronDown, Search } from 'lucide-react'
import { Avatar } from '@nextui-org/react'
import { Button, Text } from '@/components/ui/atoms'
import { useSession } from 'next-auth/react'

interface NavbarProps {
    title?: string
}

export const Navbar: React.FC<NavbarProps> = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { data: session } = useSession()
    return (
        <nav className="fixed top-0 left-64 right-0 w-[calc(100%-16rem)] flex items-center justify-between bg-white shadow-md px-6 py-3 z-50">
            {/* Título */}
            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>

            {/* Barra de pesquisa */}
            <div className="relative w-1/3">
                <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                />
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="w-full pl-10 pr-4 py-2 border bg-gray-100 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            {/* Avatar e Dropdown */}
            <div className="relative ">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-200"
                >
                    <div className="flex w-8 h-8">
                        <Avatar
                            src={session?.user?.image || ''}
                            className="w-full h-full"
                        />
                    </div>
                    <Text.Content>{session?.user?.name}</Text.Content>
                    <ChevronDown className="text-gray-600" size={18} />
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg p-4">
                        <Text.H4>{session?.user?.name}</Text.H4>
                        <Text.Content>{session?.user?.email}</Text.Content>

                        <Button
                            className="bg-red-500 text-white hover:bg-red-600 w-full mt-4"
                            size="sm"
                            onClick={async () => await signOut()}
                        >
                            Sair
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    )
}
