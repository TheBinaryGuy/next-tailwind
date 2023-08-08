import { ReactNode } from 'react';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';

import '@/styles/globals.css';

const inter = Inter({
    variable: '--font-sans',
    subsets: ['latin'],
});

const jb = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
});

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
        <html lang='en' dir='ltr' suppressHydrationWarning>
            <body
                className={cn(inter.variable, jb.variable, {
                    'debug-screens': process.env.NODE_ENV === 'development',
                })}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
