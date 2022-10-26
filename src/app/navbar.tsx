import Link from 'next/link';

export const Navbar = () => (
    <nav className='h-20 w-full bg-white shadow shadow-slate-200'>
        <div className='container mx-auto flex h-full items-center justify-between p-4'>
            <Link href='/'>
                <h1 className='text-2xl'>Next.js + Tailwind</h1>
            </Link>
            <ul className='flex items-center justify-center gap-4'>
                <li>
                    <Link
                        href='https://github.com/TheBinaryGuy/next-tailwind'
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex min-h-[40px] w-full items-center justify-center rounded bg-indigo-600 px-6 font-medium text-slate-50 transition hover:bg-indigo-700 focus:outline-none focus-visible:outline-indigo-600 active:bg-indigo-500 sm:w-auto'>
                        Clone This
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);
