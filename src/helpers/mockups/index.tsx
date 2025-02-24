import { RiHome6Fill } from 'react-icons/ri'
import { LuInfo } from 'react-icons/lu'
import { CgWebsite } from 'react-icons/cg'
import { LuContact } from 'react-icons/lu'
import { itemMenuLpProps } from '../typesAndInterfaces'
import image1 from '../../../public/image1.png'
import image2 from '../../../public/image2.png'
import image3 from '../../../public/image3.png'
import image4 from '../../../public/image4.png'
import image5 from '../../../public/image5.png'
import { FaHome, FaUser, FaCog, FaChartBar } from 'react-icons/fa'

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
        title: 'Menu',
        items: [
            { label: 'Dashboard', link: '/dashboard', icon: <FaHome /> },
            {
                label: 'Configurações',
                link: '/',
                icon: <FaCog />,
                badge: 'Novo',
                badgeColor: 'text-primary',
            },
        ],
    },
    {
        title: 'Administração',
        items: [
            { label: 'Usuários', link: '/', icon: <FaUser /> },
            { label: 'Relatórios', link: '/', icon: <FaChartBar /> },
        ],
    },
]
