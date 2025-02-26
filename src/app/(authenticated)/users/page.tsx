import { Navbar } from '@/components/layouts'
import { UsersList } from '@/components/pages/Users'

export default function Users() {
    return (
        <div>
            <Navbar title="Usuários" />
            <UsersList />
        </div>
    )
}
