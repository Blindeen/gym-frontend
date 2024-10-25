import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import App from '@/App.tsx';
import ThemeProvider from '@/contexts/ThemeContext';

import '@/index.css';
import '@/locale';

dayjs.extend(customParseFormat);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);
