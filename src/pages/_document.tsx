import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
    <Html lang='en' dir='ltr'>
        <Head>
            <link
                rel='apple-touch-icon'
                sizes='180x180'
                href='/apple-touch-icon.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='32x32'
                href='/favicon-32x32.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='/favicon-16x16.png'
            />

            <link rel='manifest' href='/manifest.json' />
        </Head>
        <body
            className={`${
                process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
            }`}>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
