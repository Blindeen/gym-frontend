import { Outlet } from 'react-router-dom';
import { Divider } from '@nextui-org/divider';

import MenuBar from '@/layouts/main/components/MenuBar';
import Footer from '@/layouts/main/components/Footer';

const Layout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <MenuBar />
            <main className="grow">
                <Outlet />
            </main>
            <Divider className="mt-12" />
            <Footer />
        </div>
    );
};

export default Layout;
