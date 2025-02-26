import { Navbar } from '@/components/layouts'
import { PatientsList } from '@/components/pages/Patients'

export default function Patients() {
    return (
        <div>
            <Navbar title="Pacientes" />
            <PatientsList />
        </div>
    )
}
