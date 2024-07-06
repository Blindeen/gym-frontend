import { Outlet } from 'react-router-dom';
import { Divider } from '@nextui-org/divider';

import MenuBar from '@/components/MenuBar';
import Footer from '@/components/Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
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
