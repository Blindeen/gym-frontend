import Navbar from '@/components/Navbar';

import DashboardContainer from '@/containers/DashboardContainer';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-5">
            <Navbar bgColor="blue-500" />
            <div className="flex flex-col h-full justify-center items-center">
                <DashboardContainer />
            </div>
        </div>
    );
};

export default Dashboard;
