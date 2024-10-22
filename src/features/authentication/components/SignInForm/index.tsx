import { useContext } from 'react';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '@nextui-org/react';

import PasswordInput from '@components/PasswordInput';

import routes from '@/router/routes.ts';
import useRequest from '@hooks/useRequest';
import { AuthorizationResponse } from '@/types.ts';
import { AuthContext } from '@/contexts/AuthContext';
import { fieldClassNames, emailRegex } from '@/values';

import { SignInFormData } from './types';

const SignInForm = () => {
    const { setState } = useContext(AuthContext);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { sendRequest, loadingRequest } = useRequest<SignInFormData, AuthorizationResponse>(
        '/auth/sign-in',
        'POST',
        undefined,
        (data) => {
            setState({
                isLogged: true,
                ...data,
            });
            toast.success(t('signedInSuccessfully'));
            navigate(routes.home, { replace: true });
        }
    );

    const onValid = async (formData: SignInFormData) => await sendRequest(formData);

    return (
        <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onValid)}>
            <div>
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: t('emailIsRequired'),
                        pattern: {
                            value: emailRegex,
                            message: t('emailPatternIsInvalid'),
                        },
                    }}
                    render={({ field }) => (
                        <Input
                            classNames={fieldClassNames}
                            type="text"
                            label="Email"
                            radius="lg"
                            size="sm"
                            errorMessage={errors.email?.message}
                            {...field}
                            isInvalid={!!errors.email}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={{
                        required: t('passwordIsRequired'),
                    }}
                    render={({ field }) => (
                        <PasswordInput
                            classNames={fieldClassNames}
                            label={t('password')}
                            radius="lg"
                            size="sm"
                            errorMessage={errors.password?.message}
                            {...field}
                            isInvalid={!!errors.password}
                        />
                    )}
                />
            </div>
            <Button
                className="font-bold text-white"
                type="submit"
                color="primary"
                radius="lg"
                fullWidth
                isLoading={loadingRequest}
            >
                {t('signIn')}
            </Button>
        </form>
    );
};

export default SignInForm;
