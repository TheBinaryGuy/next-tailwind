const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [require('path').join(__dirname, 'src/**/*.(jsx|tsx)')],
    darkMode: 'class',
    theme: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('tailwindcss-debug-screens'),
    ],
};
