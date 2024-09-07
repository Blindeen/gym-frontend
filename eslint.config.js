import tseslint from '@typescript-eslint/eslint-plugin';
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
            ...globals.browser,
        },
    },
    plugins: {
        '@typescript-eslint': tseslint,
    },
    rules: {
        ...tseslint.configs.recommended.rules,
    },
};
