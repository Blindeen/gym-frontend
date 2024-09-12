import { useContext, useState } from 'react';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '@nextui-org/react';
import { LuEye, LuEyeOff } from 'react-icons/lu';

import { SignInFormData } from './types';

import routes from '@/router/routes.ts';
import useRequest from '@hooks/useRequest';
import { AuthorizationResponse } from '@/types.ts';
import { AuthContext } from '@/context';
import { fieldClassNames, emailRegex } from '@/values';

const SignInForm = () => {
    const { setState } = useContext(AuthContext);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
        '/member/sign-in',
        'POST',
        (data) => {
            setState({
                isLogged: true,
                ...data,
            });
            toast.success(t('signedInSuccessfully'));
            navigate(routes.home, { replace: true });
        }
    );

    const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const onSubmit = async (formData: SignInFormData) => await sendRequest(formData);

    return (
        <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
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
                        <Input
                            classNames={fieldClassNames}
                            type={isPasswordVisible ? 'text' : 'password'}
                            label={t('password')}
                            radius="lg"
                            size="sm"
                            endContent={
                                <button
                                    className="focus:outline-none"
                                    type="button"
                                    onClick={toggleVisibility}
                                >
                                    {isPasswordVisible ? (
                                        <LuEyeOff className="pointer-events-none text-2xl text-default-400" />
                                    ) : (
                                        <LuEye className="pointer-events-none text-2xl text-default-400" />
                                    )}
                                </button>
                            }
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
