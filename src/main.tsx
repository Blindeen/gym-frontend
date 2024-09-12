import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import App from '@/App.tsx';
import ThemeProvider from '@providers/ThemeProvider';

import '@/index.css';
import '@/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);
