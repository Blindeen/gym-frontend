import LoginForm from '@/containers/LoginForm';

import Navbar from '@/components/Navbar';

const LoginPage = () => {
    return (
        <div className="flex flex-col h-full">
            <Navbar bgColor="blue-500" />
            <div className="flex flex-col h-full justify-center items-center">
                <h2 className="h2-primary mt-0">Sign in</h2>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
