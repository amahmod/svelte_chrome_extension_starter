import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { crx } from '@crxjs/vite-plugin'
//@ts-ignore
import manifest from './src/manifest'
import ts_config_paths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ts_config_paths(), svelte(), crx({ manifest })],
    server: {
        hmr: {
            host: 'localhost',
            port: 3000,
            protocol: 'ws'
        }
    }
})
