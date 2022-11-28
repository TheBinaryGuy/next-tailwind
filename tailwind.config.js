const colors = require('tailwindcss/colors');
const {
    fontFamily: { sans },
} = require('tailwindcss/defaultTheme');
const path = require('path');

const brandColor = colors.indigo;

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [path.join(__dirname, 'src/**/*.(jsx|tsx)')],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', sans],
            },
            colors: {
                brand: brandColor,
            },
            ringColor: {
                DEFAULT: brandColor['600'],
            },
            ringOffsetColor: {
                DEFAULT: brandColor['600'],
            },
            borderColor: {
                DEFAULT: brandColor['600'],
            },
            divideColor: {
                DEFAULT: brandColor['600'],
            },
            outlineColor: {
                DEFAULT: brandColor['600'],
            },
            accentColor: {
                DEFAULT: brandColor['600'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@headlessui/tailwindcss'),
        require('tailwindcss-debug-screens'),
    ],
};
