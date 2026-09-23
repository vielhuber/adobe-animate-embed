import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
    build: {
        outDir: '_build',
        emptyOutDir: false,
        minify: mode !== 'development',
        sourcemap: mode === 'development',
        lib: {
            entry: './_js/script.js'
        },
        rolldownOptions: {
            output: [
                {
                    format: 'iife',
                    name: 'aae',
                    dir: '.',
                    entryFileNames: 'adobe-animate-embed.min.js'
                },
                {
                    format: 'cjs',
                    entryFileNames: 'script.js',
                    exports: 'named'
                },
                {
                    format: 'es',
                    entryFileNames: 'script.mjs'
                }
            ]
        }
    }
}));
