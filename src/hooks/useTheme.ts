import { useCallback, useEffect, useState } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    const setColorTheme = useCallback((newTheme: 'dark' | 'light') => {
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = useCallback(() => {
        if (theme === 'dark') {
            setColorTheme('light');
        } else {
            setColorTheme('dark');
        }
    }, [setColorTheme, theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && mediaQuery.matches)
        ) {
            setColorTheme('dark');
        } else {
            setColorTheme('light');
        }
    }, [setColorTheme]);

    return {
        theme,
        toggleTheme,
    };
};
