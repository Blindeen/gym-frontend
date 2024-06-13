import type { Config } from 'tailwindcss';

import { nextui } from '@nextui-org/react';

module.exports = {
    content: ['./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        primary: '#008DDA',
                        secondary: '#41C9E2',
                    },
                },
                dark: {
                    colors: {
                        primary: '#3A1078',
                        secondary: '#4E31AA',
                    },
                },
            },
        }),
    ],
} satisfies Config;
