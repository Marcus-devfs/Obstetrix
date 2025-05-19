'use client'

import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'
import Link from 'next/link'

interface BreadcrumbProps {
    items: { href: string; label: string }[]
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <Breadcrumbs className="border border-gray-100 py-4 px-6 fixed top-16 left-64 right-0 bg-white z-20">
            <BreadcrumbItem>
                <Link
                    href="/dashboard"
                    className="text-blue-600 hover:underline"
                >
                    Início
                </Link>
            </BreadcrumbItem>

            {items.map((item, index) => (
                <BreadcrumbItem
                    key={`${item.href}-${index}`}
                    isCurrent={index === items.length - 1}
                >
                    {index === items.length - 1 ? (
                        <span className="text-gray-800">{item.label}</span>
                    ) : (
                        <Link
                            href={item.href}
                            className="text-blue-600 hover:underline"
                        >
                            {item.label}
                        </Link>
                    )}
                </BreadcrumbItem>
            ))}
        </Breadcrumbs>
    )
}
