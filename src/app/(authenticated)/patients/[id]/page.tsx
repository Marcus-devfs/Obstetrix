'use client'

import { Navbar } from '@/components/layouts'
import { PatientDetails } from '@/components/pages/Patients'
import { useParams } from 'next/navigation'

export default function PatientDetail() {
    console.log('Paciente', useParams())
    return (
        <div>
            <Navbar title="Paciente" />
            <PatientDetails id={`new`} />
        </div>
    )
}
