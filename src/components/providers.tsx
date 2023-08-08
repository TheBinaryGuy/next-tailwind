'use client';

import { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function Providers({ children }: { children: ReactNode }) {
    return <NextThemesProvider attribute='class'>{children}</NextThemesProvider>;
}
