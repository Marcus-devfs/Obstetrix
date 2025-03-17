import { Sidebar } from '@/components/layouts/Sidebar'
import { menuGroups } from '@/helpers/mockups'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function AuthenticatedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth()
    if (!session?.user) redirect('/login')

    return (
        <div className="flex bg-white">
            <Sidebar menuGroups={menuGroups} />
            <main className="flex-grow px-12 pt-32">{children}</main>
        </div>
    )
}
