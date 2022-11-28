import { Footer } from '@/app/footer';
import { Navbar } from '@/app/navbar';
import '@/styles/tw.css';
import { Inter } from '@next/font/google';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

const inter = Inter({
    variable: '--font-inter',
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
    <html lang='en' dir='ltr' className={clsx(inter.variable, 'font-sans')}>
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
