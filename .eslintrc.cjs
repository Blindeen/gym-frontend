module.exports = {
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    ignores: ['dist', '.eslintrc.cjs'],
    plugins: {
        'react-refresh': require('eslint-plugin-react-refresh'),
    },
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
};
