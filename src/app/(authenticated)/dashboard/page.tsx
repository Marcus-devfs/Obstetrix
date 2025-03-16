import { Navbar } from '@/components/layouts'
import { Text } from '@/components/ui/atoms'
import { auth } from '@/auth'

export default async function Dashboard() {
    const session = await auth()
    console.log(session)
    return (
        <div className="w-full flex flex-col">
            <Navbar title="Dashboard" />
            <Text.Content>Seja Bem Vindo,</Text.Content>
            <Text.H2>Marcus!</Text.H2>
        </div>
    )
}
