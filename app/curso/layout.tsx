import FacebookPixel from '@/components/facebookPixel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Curso Dominando o FiveM/RedM',
    description: 'Criado por klandestino, prenda a criar scripts profissionais de FiveM e RedM para vender no mercado internacional ou abrir seu próprio servidor lucrativo. Desenvolvedores FiveM ganham entre $500 - $3000 USD/mês trabalhando de casa.',
    openGraph: {
        title: 'Curso Dominando o FiveM/RedM',
        description: 'Criado por klandestino, prenda a criar scripts profissionais de FiveM e RedM para vender no mercado internacional ou abrir seu próprio servidor lucrativo. Desenvolvedores FiveM ganham entre $500 - $3000 USD/mês trabalhando de casa.',
        url: "https://curso.klandestino.dev",
        siteName: "Klandestino",
        images: [
            {
                url: "https://klandestino.dev/thumbnail.jpg", // caminho da sua thumbnail
                width: 1200,
                height: 630,
                alt: "Thumbnail do Curso",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
                <FacebookPixel />
            </body>
        </html>
    )
}
