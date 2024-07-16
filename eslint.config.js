import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';

export default {
    name: 'ESLint config',
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    ignores: ['**/*.config.*', '**/*.cjs'],
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tsParser,
    },
    rules: {
        ...js.configs.recommended.rules,
    },
};
