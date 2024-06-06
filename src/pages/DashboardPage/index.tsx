import { useContext } from 'react';

import Navbar from '@/components/Navbar';

import { AuthContext } from '@/AuthContext.tsx';

const Dashboard = () => {
    const { state } = useContext(AuthContext);
    const { user } = state;

    return (
        <div className="flex flex-col h-full">
            <Navbar bgColor="blue-500" />
            <div className="flex flex-col h-full justify-center items-center">
                <h2 className="h2-primary mt-0">Dashboard</h2>
                {user.role === 'CUSTOMER' ? (
                    <p>Welcome, {user.email}! You are a customer.</p>
                ) : user.role === 'TRAINER' ? (
                    <p>Welcome, {user.email}! You are a trainer.</p>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
