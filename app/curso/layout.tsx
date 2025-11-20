import { Toaster } from '@/components/ui/sonner'
import { FB_PIXEL_ID, GOOGLE_TAG } from '@/lib/pixel'
import type { Metadata } from 'next'
import Script from "next/script"

export const metadata: Metadata = {
    title: 'Curso de FiveM e RedM - Aprenda a Criar Scripts Profissionais | Tutorial Completo',
    description: 'Curso completo de FiveM e RedM. Aprenda como criar scripts profissionais, desenvolver mods e servidores lucrativos. Tutorial passo a passo para iniciantes e avançados. Criado por Klandestino, desenvolvedor com anos de experiência. Ganhe de $500 a $3000 USD/mês.',
    keywords: [
        'curso fivem',
        'curso redm',
        'curso de fivem',
        'curso de redm',
        'como criar script no fivem',
        'como criar script no redm',
        'tutorial fivem',
        'tutorial redm',
        'tutorial de fivem',
        'aprenda fivem',
        'aprenda redm',
        'desenvolver fivem',
        'desenvolver redm',
        'script fivem',
        'script redm',
        'programação fivem',
        'programação redm',
        'servidor fivem',
        'servidor redm',
        'mod fivem',
        'mod redm',
        'fivem brasileiro',
        'redm brasileiro',
        'curso programação fivem',
        'curso programação redm',
    ],
    authors: [{ name: 'Klandestino' }],
    creator: 'Klandestino',
    publisher: 'Klandestino',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://curso.klandestino.dev',
    },
    openGraph: {
        title: 'Curso de FiveM e RedM - Aprenda a Criar Scripts Profissionais',
        description: 'Curso completo de FiveM e RedM. Aprenda como criar scripts profissionais, desenvolver mods e servidores lucrativos. Tutorial passo a passo criado por Klandestino. Desenvolvedores FiveM ganham entre $500 - $3000 USD/mês trabalhando de casa.',
        url: 'https://curso.klandestino.dev',
        siteName: 'Klandestino - Curso FiveM/RedM',
        images: [
            {
                url: 'https://klandestino.dev/thumbnail.jpg',
                width: 1200,
                height: 630,
                alt: 'Curso de FiveM e RedM - Tutorial Completo de Criação de Scripts',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Curso de FiveM e RedM - Tutorial Completo',
        description: 'Aprenda a criar scripts profissionais de FiveM e RedM. Curso completo passo a passo.',
        images: ['https://klandestino.dev/thumbnail.jpg'],
        creator: '@klandestino',
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Course',
                            name: 'Curso de FiveM e RedM - Do Zero ao Avançado',
                            description: 'Curso completo para aprender a criar scripts profissionais de FiveM e RedM, desenvolver mods e montar servidores lucrativos.',
                            provider: {
                                '@type': 'Organization',
                                name: 'Klandestino',
                                sameAs: 'https://klandestino.dev',
                            },
                            offers: [
                                {
                                    '@type': 'Offer',
                                    category: 'Curso Completo',
                                    price: '219.00',
                                    priceCurrency: 'BRL',
                                    availability: 'https://schema.org/InStock',
                                    url: 'https://curso.klandestino.dev',
                                },
                                {
                                    '@type': 'Offer',
                                    category: 'Curso + Comunidade',
                                    price: '398.00',
                                    priceCurrency: 'BRL',
                                    availability: 'https://schema.org/InStock',
                                    url: 'https://curso.klandestino.dev',
                                },
                                {
                                    '@type': 'Offer',
                                    category: 'Comunidade Master Developers',
                                    price: '128.00',
                                    priceCurrency: 'BRL',
                                    availability: 'https://schema.org/InStock',
                                    url: 'https://curso.klandestino.dev',
                                },
                            ],
                            educationalLevel: 'Beginner to Advanced',
                            inLanguage: 'pt-BR',
                            coursePrerequisites: 'Conhecimentos básicos de programação são úteis, mas não obrigatórios',
                            hasCourseInstance: {
                                '@type': 'CourseInstance',
                                courseMode: 'online',
                                courseWorkload: 'P25H',
                            },
                            about: [
                                {
                                    '@type': 'Thing',
                                    name: 'FiveM',
                                },
                                {
                                    '@type': 'Thing',
                                    name: 'RedM',
                                },
                                {
                                    '@type': 'Thing',
                                    name: 'Desenvolvimento de Scripts',
                                },
                                {
                                    '@type': 'Thing',
                                    name: 'Programação de Servidores',
                                },
                            ],
                            aggregateRating: {
                                '@type': 'AggregateRating',
                                ratingValue: '4.9',
                                reviewCount: '150',
                                bestRating: '5',
                                worstRating: '1',
                            },
                        }),
                    }}
                />
                {children}
                <Toaster />
            </body>
        </html>
    )
}
