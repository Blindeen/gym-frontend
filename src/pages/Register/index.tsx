import RegisterForm from '@/containers/RegisterForm';

import FormCard from '@/components/form/FormCard';
import Navbar from '@/components/Navbar';

const RegisterPage = () => {
    return (
        <>
            <Navbar bgColor="blue-500" />
            <FormCard>
                <h2 className="h2-primary mt-0">Sign up</h2>
                <RegisterForm />
            </FormCard>
        </>
    );
};

export default RegisterPage;
