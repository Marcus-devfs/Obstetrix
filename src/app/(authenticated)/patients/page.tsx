import { Navbar } from '@/components/layouts'
import { PatientsList } from '@/components/pages/Patients'
import { Breadcrumb } from '@/components/ui/organisms'

export default function Patients() {
    return (
        <div>
            <Navbar title="Pacientes" />
            <Breadcrumb items={[{ href: '/patients', label: 'Pacientes' }]} />
            <PatientsList />
        </div>
    )
}
