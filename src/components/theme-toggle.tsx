'use client';

import { useEffect, useState } from 'react';
import { LaptopIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant='ghost' size='sm' className='w-9 px-0'>
                <MoonIcon className='h-5 w-5' />
            </Button>
        );
    }

    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='sm' className='w-9 px-0'>
                    {(theme === 'light' || (theme === 'system' && !systemDark)) && (
                        <SunIcon className='h-5 w-5' />
                    )}
                    {(theme === 'dark' || (theme === 'system' && systemDark)) && (
                        <MoonIcon className='h-5 w-5' />
                    )}
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    <SunIcon className='mr-2 h-4 w-4' />
                    <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <MoonIcon className='mr-2 h-4 w-4' />
                    <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    <LaptopIcon className='mr-2 h-4 w-4' />
                    <span>System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
