import type { Config } from 'tailwindcss';

import { nextui } from '@nextui-org/react';

module.exports = {
    content: [
        './src/**/*.{html,js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        primary: '#526FFF',
                        secondary: '#41C9E2',
                    },
                },
                dark: {
                    colors: {
                        primary: '#A0B6FA',
                        secondary: '#0B3A56',
                    },
                },
            },
        }),
    ],
} satisfies Config;
