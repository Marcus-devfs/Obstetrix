import { RiHome6Fill } from 'react-icons/ri'
import { LuInfo } from 'react-icons/lu'
import { CgWebsite } from 'react-icons/cg'
import { LuContact } from 'react-icons/lu'
import { Clinic, itemMenuLpProps } from '../typesAndInterfaces'
import image1 from '../../../public/image1.png'
import image2 from '../../../public/image2.png'
import image3 from '../../../public/image3.png'
import image4 from '../../../public/image4.png'
import image5 from '../../../public/image5.png'
import {
    FaHome,
    FaUser,
    FaCog,
    FaChartBar,
    FaCalendar,
    FaNotesMedical,
} from 'react-icons/fa'
import { BiSolidReport } from 'react-icons/bi'

export const dataMenuLp: Array<itemMenuLpProps> = [
    {
        value: 'home',
        title: 'Home',
        icon: <RiHome6Fill color="#9ca3af" size={16} />,
        activeIcon: <RiHome6Fill color="white" size={16} />,
    },
    {
        value: 'about-us',
        title: 'Sobre nós',
        icon: <LuInfo color="#9ca3af" size={16} />,
        activeIcon: <LuInfo color="white" size={16} />,
    },
    {
        value: 'plataform',
        title: 'Plataforma',
        icon: <CgWebsite color="#9ca3af" size={16} />,
        activeIcon: <CgWebsite color="white" />,
    },
    {
        value: 'contact-us',
        title: 'Fale conosco',
        icon: <LuContact color="#9ca3af" size={16} />,
        activeIcon: <LuContact color="white" />,
    },
]

export const dataImageBannerPrincipal = [image1, image2, image3, image4, image5]

export const menuGroups = [
    {
        title: 'Clinica',
        items: [
            {
                label: 'Dashboard',
                link: '/dashboard',
                icon: <FaHome />,
                badge: 'Novo',
                badgeColor: 'text-primary',
            },
            { label: 'Pacientes', link: '/pacientes', icon: <FaUser /> },
            {
                label: 'Agendamentos',
                link: '/agendamentos',
                icon: <FaCalendar />,
            },
            {
                label: 'Consultas',
                link: '/consultas',
                icon: <FaNotesMedical />,
            },
            {
                label: 'Relatórios',
                link: '/relatorios',
                icon: <BiSolidReport />,
            },
        ],
    },
    {
        title: 'Administração',
        items: [
            { label: 'Usuários', link: '/usuarios', icon: <FaUser /> },
            { label: 'Clinicas', link: '/clinicas', icon: <FaChartBar /> },
            {
                label: 'Configurações',
                link: '/config',
                icon: <FaCog />,
            },
        ],
    },
]

export const clinics: Clinic[] = [
    {
        clinicId: '1',
        clinicName: 'Clínica Saúde Total',
        clinicContact: 'clinica_saude@email',
        clinicResponsable: 'João Silva',
        avatar: 'https://picsum.photos/200?random=1',
    },
    {
        clinicId: '2',
        clinicName: 'Clínica Vida Plena',
        clinicContact: 'clinica_vida@email',
        clinicResponsable: 'Maria Souza',
        avatar: 'https://picsum.photos/200?random=2',
    },
    {
        clinicId: '3',
        clinicName: 'Clínica Bem-Estar',
        clinicContact: 'clinica_bem@email',
        clinicResponsable: 'Carlos Mendes',
        avatar: 'https://picsum.photos/200?random=3',
    },
]
