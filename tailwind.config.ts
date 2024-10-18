import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

import colors from './src/colors';

const { violentViolet, violet, oldBlueEyesIrises, pictonBlue, white, twitterDim } = colors;

module.exports = {
    content: [
        './src/**/*.{html,js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'radial-gradient': `radial-gradient(circle farthest-side at 100%, ${violentViolet} 38%, ${violet} 65%)`,
            },
            fontFamily: {
                handwriting: ['"Dancing Script"', 'cursive'],
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        primary: oldBlueEyesIrises,
                        secondary: pictonBlue,
                    },
                },
                dark: {
                    colors: {
                        primary: oldBlueEyesIrises,
                        secondary: pictonBlue,
                        foreground: white,
                        background: twitterDim,
                    },
                },
            },
        }),
    ],
} satisfies Config;
