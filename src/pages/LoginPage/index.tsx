import LoginForm from '@/containers/LoginForm';

import FormCard from '@/components/form/FormCard';

const LoginPage = () => {
    return (
        <FormCard>
            <h2 className="h2-primary mt-0">Sign in</h2>
            <LoginForm />
        </FormCard>
    );
};

export default LoginPage;
