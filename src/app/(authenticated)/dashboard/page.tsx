import { Navbar } from '@/components/layouts'
import { Text } from '@/components/ui/atoms'
import { auth } from '@/auth'

export default async function Dashboard() {
    const session = await auth()
    const firstName = session?.user?.name?.split(' ')[0]
    return (
        <div className="w-full flex flex-col">
            <Navbar title="Dashboard" />
            <Text.Content>Seja Bem Vindo,</Text.Content>
            <Text.H2>{firstName}!</Text.H2>
        </div>
    )
}
