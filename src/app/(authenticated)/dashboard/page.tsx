import { Navbar } from '@/components/layouts'
import { Dashboard } from '@/components/pages/Dashboard'
import { Text } from '@/components/ui/atoms'
import { auth } from '@/auth'

export default function DashboardPage() {
    return (
        <div className="w-full flex flex-col">
            <Navbar title="Dashboard" />
            <Dashboard />
        </div>
    )
}
