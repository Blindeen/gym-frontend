import type { Config } from 'tailwindcss';

import { nextui } from '@nextui-org/react';

module.exports = {
    content: ['./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [nextui()],
} satisfies Config;
