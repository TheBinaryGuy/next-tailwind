import { getLayout, RouteLoadingBar, SEO, type SEOProps } from '@/components/';
import '@/styles/tw.css';
import { type NextComponentType, type NextPageContext } from 'next';
import { type AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState, type ReactNode } from 'react';

interface Props extends AppProps<SEOProps> {
    Component: NextComponentType<NextPageContext, any, SEOProps> & {
        getLayout?: (page: ReactNode) => JSX.Element | null;
    } & SEOProps;
}

const App = ({ Component, pageProps }: Props) => {
    const router = useRouter();
    const [state, setState] = useState({
        isRouteChanging: false,
        loadingKey: 0,
    });

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setState(prevState => ({
                ...prevState,
                isRouteChanging: true,
                // eslint-disable-next-line no-bitwise
                loadingKey: prevState.loadingKey ^ 1,
            }));
        };

        const handleRouteChangeEnd = () => {
            setState(prevState => ({
                ...prevState,
                isRouteChanging: false,
            }));
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeEnd);
        router.events.on('routeChangeError', handleRouteChangeEnd);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeEnd);
            router.events.off('routeChangeError', handleRouteChangeEnd);
        };
    }, [router.events]);

    const getFinalLayout = Component.getLayout || getLayout;

    return (
        <>
            <RouteLoadingBar
                isRouteChanging={state.isRouteChanging}
                key={state.loadingKey}
            />
            <SEO
                title={pageProps.title ?? Component.title}
                desc={pageProps.desc ?? Component.desc}
                img={pageProps.img ?? Component.img}
            />
            {getFinalLayout(<Component {...pageProps} />)}
        </>
    );
};

export default App;
