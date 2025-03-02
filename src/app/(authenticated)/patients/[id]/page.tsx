'use client'

import { Navbar } from '@/components/layouts'
import { PatientDetails } from '@/components/pages/Patients'
import { Breadcrumb } from '@/components/ui/organisms'
import { useParams } from 'next/navigation'

export default function PatientDetail() {
    console.log('Paciente', useParams())
    return (
        <div>
            <Navbar title="Paciente" />
            <Breadcrumb
                items={[
                    { href: '/patients', label: 'Pacientes' },
                    { href: '/patients/new', label: 'Novo Paciente' },
                ]}
            />
            <PatientDetails id={`new`} />
        </div>
    )
}
