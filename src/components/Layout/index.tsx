import { Outlet } from 'react-router-dom';

import MenuBar from '@/components/MenuBar';

const Layout = () => {
    return (
        <>
            <nav>
                <MenuBar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
};

export default Layout;
