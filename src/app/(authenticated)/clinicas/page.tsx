import { Navbar } from '@/components/layouts'
import { ClinicList } from '@/components/pages/Clinic'
import { Breadcrumb } from '@/components/ui/organisms'

export default function Clinics() {
    return (
        <div>
            <Navbar title="Clínicas" />
            <Breadcrumb items={[{ href: '/clinicas', label: 'Clínicas' }]} />
            <ClinicList />
        </div>
    )
}
