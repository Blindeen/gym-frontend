import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';

import { Router } from './router';

import AuthSessionProvider from '@/contexts/AuthContext';
import { ThemeContext } from '@/contexts/ThemeContext';

import colors from '@/colors.ts';
import { DARK_MODE_CLASS_NAME } from '@/constants';

const App = () => {
    const { value } = useContext(ThemeContext);
    const navigate = useNavigate();

    const { oldBlueEyesIrises, white } = colors;

    useEffect(() => {
        value
            ? document.body.classList.add(DARK_MODE_CLASS_NAME)
            : document.body.classList.remove(DARK_MODE_CLASS_NAME);
    }, [value]);

    return (
        <>
            <AuthSessionProvider>
                <NextUIProvider navigate={navigate}>
                    <div className="bg-background text-foreground">
                        <Router />
                    </div>
                </NextUIProvider>
            </AuthSessionProvider>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        padding: '18px',
                        backgroundColor: oldBlueEyesIrises,
                        color: white,
                    },
                }}
            />
        </>
    );
};

export default App;
