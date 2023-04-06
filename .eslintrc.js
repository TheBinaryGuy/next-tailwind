module.exports = {
    root: true,
    extends: [
        'next/core-web-vitals',
        'prettier',
        'plugin:tailwindcss/recommended',
    ],
    plugins: ['unused-imports', 'tailwindcss'],
    settings: {
        tailwindcss: {
            callees: ['cn', 'clsx', 'tw'],
        },
    },
    rules: {
        'react/jsx-key': 'error',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        semi: ['error', 'always'],
        'unused-imports/no-unused-imports': 'error',
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                depth: 3,
            },
        ],
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/classnames-order': 'error',
    },
    ignorePatterns: [
        '**/*.js',
        '**/*.json',
        'node_modules',
        'public',
        'styles',
        '.next',
        'coverage',
        'dist',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
};
