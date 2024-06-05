import RegisterForm from '@/containers/RegisterForm';

import FormCard from '@/components/form/FormCard';

const RegisterPage = () => {
    return (
        <FormCard>
            <h2 className="h2-primary mt-0">Sign up</h2>
            <RegisterForm />
        </FormCard>
    );
};

export default RegisterPage;
