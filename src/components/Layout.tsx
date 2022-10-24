import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <>
        <Navbar />
        <div className='container mx-auto my-8 flex-1 px-4'>{children}</div>
        <Footer />
    </>
);

export const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;
