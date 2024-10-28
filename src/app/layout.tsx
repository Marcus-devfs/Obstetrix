import { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ApplicationProvider } from '@/contexts/providers/ApplicationProvider'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
    title: 'Obstetrix',
    description: 'Uma plataforma pensada em facilitar a vida do obstetra',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt">
            <body className={poppins.className}>
                <ApplicationProvider>{children}</ApplicationProvider>
            </body>
        </html>
    )
}
