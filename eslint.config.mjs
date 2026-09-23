import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
    globalIgnores(['_build/**', '_tests/data/**', 'adobe-animate-embed.min.js']),
    {
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.jquery,
                ...globals.amd,
                ...globals.node
            }
        },
        rules: {
            ...js.configs.recommended.rules,
            quotes: ['error', 'single', { allowTemplateLiterals: true }],
            semi: ['error', 'always'],
            'linebreak-style': 'off',
            'no-console': 'off',
            'no-unused-vars': 'off'
        }
    }
]);
