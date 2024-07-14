import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';

import AuthSessionProvider from '@/context';
import Router from '@/router';
import { ThemeContext } from '@/providers/ThemeProvider';

import colors from '@/colors.ts';
import { darkModeClassName } from '@/values.ts';

const App = () => {
    const { value } = useContext(ThemeContext);
    const navigate = useNavigate();

    const { twitterDim, white, black } = colors;

    useEffect(() => {
        value
            ? document.body.classList.add(darkModeClassName)
            : document.body.classList.remove(darkModeClassName);
    }, [value]);

    return (
        <>
            <AuthSessionProvider>
                <NextUIProvider navigate={navigate}>
                    <div className="text-foreground bg-background">
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
