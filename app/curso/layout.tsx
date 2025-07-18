import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Curso Dominando o FIVEM/REDM',
    description: 'Criado por klandestino, prenda a criar scripts profissionais de FiveM e RedM para vender no mercado internacional ou abrir seu próprio servidor lucrativo. Desenvolvedores FiveM ganham entre $500 - $3000 USD/mês trabalhando de casa.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    )
}
