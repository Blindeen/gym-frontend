import type { Config } from 'tailwindcss';

import { nextui } from '@nextui-org/react';

module.exports = {
    content: [
        './src/**/*.{html,js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'radial-gradient':
                    'radial-gradient(circle farthest-side at 100%, #2e1067 38%, #1f094a 65%)',
            },
        },
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
                        foreground: '#FFFFFF',
                        background: '#15202B',
                    },
                },
            },
        }),
    ],
} satisfies Config;
