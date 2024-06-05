import RegisterForm from '@/containers/RegisterForm';

import FormCard from '@/components/form/FormCard';
import Navbar from '@/components/Navbar';

const RegisterPage = () => {
    return (
        <div className="flex flex-col h-full">
            <Navbar bgColor="blue-500" />
            <FormCard>
                <h2 className="h2-primary mt-0">Sign up</h2>
                <RegisterForm />
            </FormCard>
        </div>
    );
};

export default RegisterPage;
