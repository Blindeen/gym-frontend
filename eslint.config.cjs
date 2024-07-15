module.exports = {
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        parser: require('@typescript-eslint/parser'),
    },
    ignores: ['dist', '.eslintrc.cjs'],
    plugins: {
        'react-refresh': require('eslint-plugin-react-refresh'),
        'react-hooks': require('eslint-plugin-react-hooks'),
        'eslint-plugin-react': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
};
