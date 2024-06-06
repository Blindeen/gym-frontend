import { useContext } from 'react';

import Navbar from '@/components/Navbar';

import CustomerDashboard from '@/containers/dashboards/CustomerDashboard';
import TrainerDashboard from '@/containers/dashboards/TrainerDashboard';

import { AuthContext } from '@/AuthContext.tsx';

const Dashboard = () => {
    const { state } = useContext(AuthContext);
    const { user } = state;

    return (
        <div className="flex flex-col gap-5">
            <Navbar bgColor="blue-500" />
            <div className="flex flex-col h-full justify-center items-center">
                <h2 className="h2-primary mt-0">Dashboard</h2>
                {user.role === 'CUSTOMER' ? (
                    <CustomerDashboard />
                ) : user.role === 'TRAINER' ? (
                    <TrainerDashboard />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
