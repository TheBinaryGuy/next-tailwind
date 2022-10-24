module.exports = {
    extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'layer',
                ],
            },
        ],
        'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
    },
};
