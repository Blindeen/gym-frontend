import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default {
    name: 'ESLint config',
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    ignores: ['**/*.config.*'],
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tsParser,
        globals: {
            ...globals.browser,,
        },
    },
    rules: {
        ...js.configs.recommended.rules,
    },
};
