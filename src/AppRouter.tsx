import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import LandingPage from '@/pages/LandingPage';

import routes from './routes.ts';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={routes.home} element={<Layout />}>
                    <Route index element={<LandingPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
