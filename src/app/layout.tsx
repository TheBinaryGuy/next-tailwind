import { Footer } from '@/app/footer';
import { Navbar } from '@/app/navbar';
import '@/styles/tw.css';
import { Inter } from '@next/font/google';
import { FC, PropsWithChildren } from 'react';

const inter = Inter();

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
    <html lang='en' dir='ltr' className={inter.className}>
        <body
            className={`${
                process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
            }`}>
            <Navbar />
            <div className='container mx-auto my-8 flex-1 px-4'>{children}</div>
            <Footer />
        </body>
    </html>
);

export default RootLayout;
