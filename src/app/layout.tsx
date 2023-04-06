import '@/styles/tw.css';
import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export const metadata = {
    title: {
        default: 'Next.js + Tailwind',
        template: '%s',
    },
    keywords: 'Next.js + Tailwind',
    description: 'Next.js Tailwind Template.',
    metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN}`),
    robots: {
        index: true,
        follow: true,
    },
    themeColor: '#4f46e5',
    openGraph: {
        description: 'Next.js Tailwind Template.',
        type: 'website',
        title: {
            default: 'Next.js + Tailwind',
            template: '%s',
        },
        images: `https://${process.env.NEXT_PUBLIC_DOMAIN ?? 'example.com'}/icon.png`,
    },
    twitter: {
        description: 'Next.js Tailwind Template.',
        title: {
            default: 'Next.js + Tailwind',
            template: '%s',
        },
        card: 'summary',
        creator: '@81NARY',
        images: `https://${
            process.env.NEXT_PUBLIC_DOMAIN ?? 'example.com'
        }/android-icon-192x192.png`,
    },
    icons: {
        icon: '/apple-icon.png',
        shortcut: '/favicon-96x96.png',
        apple: '/apple-icon.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/apple-touch-icon-precomposed.png',
        },
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en' dir='ltr'>
            <body
                className={cn({
                    'debug-screens': process.env.NODE_ENV === 'development',
                })}>
                <div className='container mx-auto my-8 flex flex-1 grow flex-col px-4'>
                    {children}
                </div>
            </body>
        </html>
    );
}
