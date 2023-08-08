module.exports = {
    env: { es6: true, browser: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:svelte/recommended'
        'plugin:prettier/recommended'
    ],
    globals: { chrome: true },
    ignorePatterns: ['node_modules', '*.cjs'],
    overrides: [
        {
            files: ['*.svelte'],
            parser: "svelte-eslint-parser",
            parserOptions: { parser: '@typescript-eslint/parser' }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.svelte'],
        parser: '@typescript-eslint/parser'
    },
    plugins: ['prettier', '@typescript-eslint'],
    root: true,
    rules: {
        'prettier/prettier': 'error',
        'import/order': [
            'warn',
            {
                alphabetize: { order: 'asc', caseInsensitive: true },
                'newlines-between': 'always'
            }
        ],
        'arrow-body-style': ['error', 'as-needed'],
        'prefer-arrow-callback': [
            'error',
            { allowNamedFunctions: false, allowUnboundThis: true }
        ],
        'import/prefer-default-export': 0,
        'no-param-reassign': 0,
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variableLike',
                format: ['snake_case', 'camelCase']
            }
        ]
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.cjs', '.js', '.ts']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        }
    }
}
