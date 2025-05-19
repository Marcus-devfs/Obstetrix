'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Text } from '@/components/ui/atoms'
import { GiWireframeGlobe } from 'react-icons/gi'

type MenuItem = {
    label: string
    link: string
    icon?: ReactNode
    badge?: string
    badgeColor?: string
}

type MenuGroup = {
    title: string
    items: MenuItem[]
}

type SidebarProps = {
    menuGroups: MenuGroup[]
}

export const Sidebar = ({ menuGroups }: SidebarProps) => {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-gray-100 h-screen p-4 sticky top-0">
            <div className="flex items-center justify-start pl-6 my-3 mb-12 w-full">
                <GiWireframeGlobe color="#3b82f6" size={30} className="mr-1" />
                <Text.H3 className="hidden md:block">Obstetrix</Text.H3>
                <Text.Customize>PRO</Text.Customize>
                <span className="text-primary text-lg font-semibold">*</span>
            </div>

            <nav>
                {menuGroups.map(({ title, items }) => (
                    <div key={`${title}-${items[0].link}`} className="mb-4">
                        <Text.H4 className="mb-2">{title}</Text.H4>
                        <ul className="space-y-2">
                            {items.map(
                                ({ label, link, icon, badge, badgeColor }) => {
                                    const isActive = pathname === link
                                    return (
                                        <Link
                                            key={link}
                                            href={link}
                                            className={cn(
                                                'flex items-center p-3 rounded-md transition',
                                                isActive
                                                    ? 'bg-primary-100'
                                                    : 'hover:bg-gray-200'
                                            )}
                                        >
                                            {icon && (
                                                <span
                                                    className={cn(
                                                        'mr-2',
                                                        isActive
                                                            ? 'text-primary'
                                                            : 'text-gray-400'
                                                    )}
                                                >
                                                    {icon}
                                                </span>
                                            )}
                                            <Text.Content
                                                className={cn(
                                                    isActive
                                                        ? 'text-primary'
                                                        : 'text-gray-600'
                                                )}
                                            >
                                                {label}
                                            </Text.Content>
                                            {badge && (
                                                <span
                                                    className={cn(
                                                        'px-2 py-1 text-xs rounded-md',
                                                        badgeColor
                                                    )}
                                                >
                                                    {badge}
                                                </span>
                                            )}
                                        </Link>
                                    )
                                }
                            )}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    )
}
