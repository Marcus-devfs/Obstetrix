import { Sidebar } from '@/components/layouts/Sidebar'
import { menuGroups } from '@/helpers/mockups'

export default function AuthenticatedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex bg-white">
            <Sidebar menuGroups={menuGroups} />
            <main className="flex-grow px-12 pt-24">{children}</main>
        </div>
    )
}
