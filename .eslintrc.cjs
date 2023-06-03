export default {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.svelte'],
        parser: '@typescript-eslint/parser',
    },
    env: {
        es6: true,
        browser: true,
    },
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
            // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
    ],
    settings: {
        'svelte3/typescript': require('typescript'),
        // ignore style tags in Svelte because of Tailwind CSS
        // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
        'svelte3/ignore-styles': () => true,
    },
    plugins: ['svelte3', '@typescript-eslint'],
    ignorePatterns: ['node_modules'],
    globals: {
        chrome: true,
    },
}
