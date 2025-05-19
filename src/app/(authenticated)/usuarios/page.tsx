import { Navbar } from '@/components/layouts'
import { UsersList } from '@/components/pages/Users'
import { Breadcrumb } from '@/components/ui/organisms'

export default function Users() {
    return (
        <div>
            <Navbar title="Usuários" />
            <Breadcrumb items={[{ href: '/usuarios', label: 'Usuários' }]} />
            <UsersList />
        </div>
    )
}
