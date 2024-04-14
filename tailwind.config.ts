import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            borderRadius: {
                large: '30px',
            },
            boxShadow: {
                slight: '10px 0 10px -5px rgba(0, 0, 0, 0.5)',
            },
            screens: {
                sm: '320px',
            },
        },
        colors: {
            red: '#FF0000',
            spinningSnowflake: '#F1F3F1',
            white: '#FFFFFF',
            black: '#000000',
            darkCharcoal: '#333333',
            blue: '#154ABD',
            steam: '#DDDDDD',
            darkNostalgiaSkyBlue: '#1A8AD3',
            forrestLagoon: '#48B1EA',
            paleMorningBlueSky: '#D5EDFA',
        },
    },
    plugins: [],
} satisfies Config;
