import { Sidebar } from '@/components/layouts/Sidebar'
import { Poppins } from 'next/font/google'
import '../globals.css'
import { menuGroups } from '@/helpers/mockups'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function AuthenticatedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`flex bg-white ${poppins.className}`}>
            <Sidebar menuGroups={menuGroups} />
            <main className="flex-grow px-12 pt-24">{children}</main>
        </div>
    )
}
