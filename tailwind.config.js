const colors = require('tailwindcss/colors');
const path = require('path');

const brandColor = colors.indigo;

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [path.join(__dirname, 'src/**/*.(jsx|tsx)')],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: brandColor,
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('tailwindcss-debug-screens'),
    ],
};
