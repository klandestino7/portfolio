import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'klandestino',
  description: 'About me',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
            <link rel="shortcut icon" type="image/png" href="/favicon.png" />

      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon.png" />
      <body>{children}</body>
    </html>
  )
}
