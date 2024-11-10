import plugin_js from '@eslint/js'
import globals from 'globals'
import typescript_eslint from 'typescript-eslint'
import eslint_plugin_svelte from 'eslint-plugin-svelte'

import eslint_plugin_prettier from 'eslint-config-prettier'

export default [
    // js
    plugin_js.configs.recommended,

    // ts
    ...typescript_eslint.configs.recommended,
    {
        languageOptions: {
            globals: globals.browser,
            sourceType: 'module'
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
        }
    },

    // prettier
    ...eslint_plugin_svelte.configs['flat/prettier'],
    eslint_plugin_prettier
]
