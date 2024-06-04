import RegisterForm from '@/containers/RegisterForm';

import PageBackground from '@/components/PageBackground';
import FormCard from '@/components/form/FormCard';

const RegisterPage = () => {
    return (
        <PageBackground>
            <FormCard>
                <h2 className="h2-primary">Sign up</h2>
                <RegisterForm />
            </FormCard>
        </PageBackground>
    );
};

export default RegisterPage;
