import FacebookPixel from '@/components/facebookPixel'
import { FB_PIXEL_ID, GOOGLE_TAG } from '@/lib/pixel'
import type { Metadata } from 'next'
import Script from "next/script"

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
            <head>
                <Script id="google-analytics">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-${GOOGLE_TAG}');
                    `}
                </Script>
            </head>

            <noscript>
                <iframe src={`https://www.googletagmanager.com/ns.html?id=GTM-${GOOGLE_TAG}`}
                height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe>
            </noscript>

            <Script id="fb-pixel">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', ${FB_PIXEL_ID});
                    fbq('track', 'PageView');
                `}
            </Script>

            <noscript><img height="1" width="1" style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            /></noscript>

            <body>
                {children}
            </body>
        </html>
    )
}
