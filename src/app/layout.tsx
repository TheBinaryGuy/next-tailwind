import { Footer } from '@/app/footer';
import { Navbar } from '@/app/navbar';
import '@/styles/tw.css';
import { FC, PropsWithChildren } from 'react';

export const metadata = {
    title: {
        default: 'Next.js + Tailwind',
        template: '%s',
    },
    keywords: 'Next.js + Tailwind',
    description: 'Next.js Tailwind Template.',
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
        images: `https://${
            process.env.NEXT_PUBLIC_DOMAIN ?? 'example.com'
        }/icon.png`,
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

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
    <html lang='en' dir='ltr'>
        <body
            className={`${
                process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
            }`}>
            <Navbar />
            <div className='container mx-auto my-8 flex flex-1 grow flex-col px-4'>
                {children}
            </div>
            <Footer />
        </body>
    </html>
);

export default RootLayout;
