import plugin_js from '@eslint/js'
import globals from 'globals'
import typescript_eslint from 'typescript-eslint'
import eslint_plugin_svelte from 'eslint-plugin-svelte'
import eslint_plugin_prettier from 'eslint-plugin-prettier'
import eslint_config_prettier from 'eslint-config-prettier'

export default [
    // js
    plugin_js.configs.recommended,

    // ts
    ...typescript_eslint.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.svelte'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021
            },
            sourceType: 'module',
            parser: typescript_eslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        },
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_' }
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            // Disable base ESLint rules that are handled by TypeScript ESLint
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true
                }
            ]
        }
    },

    // svelte
    ...eslint_plugin_svelte.configs['flat/recommended'],
    {
        files: ['**/*.svelte'],
        languageOptions: {
            parserOptions: {
                extraFileExtensions: ['.svelte'],
                parser: typescript_eslint.parser
            }
        },
        rules: {
            'svelte/valid-compile': 'error',
            'svelte/no-at-html-tags': 'error',
            'svelte/no-dom-manipulating': 'error'
        }
    },

    // prettier
    eslint_config_prettier,
    {
        plugins: {
            prettier: eslint_plugin_prettier
        },
        rules: {
            'prettier/prettier': 'error',
            'arrow-body-style': 'off',
            'prefer-arrow-callback': 'off'
        }
    }
]
