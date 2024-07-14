import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';

import AuthSessionProvider from '@/context';
import { ThemeContext } from '@/providers/ThemeProvider';

import Router from '@/router';
import colors from '@/colors.ts';

const App = () => {
    const { value } = useContext(ThemeContext);
    const navigate = useNavigate();

    const { twitterDim, white, black } = colors;

    return (
        <>
            <AuthSessionProvider>
                <NextUIProvider navigate={navigate}>
                    <div
                        className={`${value ? 'dark' : ''} text-foreground bg-background`}
                    >
                        <Router />
                    </div>
                </NextUIProvider>
            </AuthSessionProvider>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        padding: '18px',
                        backgroundColor: value ? twitterDim : white,
                        color: value ? white : black,
                    },
                }}
            />
        </>
    );
};

export default App;
