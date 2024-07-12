import { useContext, useState } from 'react';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Input } from '@nextui-org/react';
import { LuEye, LuEyeOff } from 'react-icons/lu';

import { SignInFormData } from '@/components/SignInForm/types.ts';

import axiosClient from '@/axios';
import routes from '@/routes.ts';
import { AuthorizationResponse } from '@/types.ts';
import { AuthContext } from '@/AuthContext.tsx';
import { handleError } from '@/axios/functions.ts';

const SignInForm = () => {
    const { setState } = useContext(AuthContext);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

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

    const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    const onSubmit = (data: SignInFormData) => {
        setLoading(true);
        axiosClient
            .post<AuthorizationResponse>('/member/login', data)
            .then(({ data }) => {
                setState({
                    isLogged: true,
                    ...data,
                });
                toast.success(t('signedInSuccessfully'));
                navigate(routes.home, { replace: true });
            })
            .catch(handleError)
            .finally(() => setLoading(false));
    };

    return (
        <form
            className="flex flex-col gap-y-2"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: t('emailIsRequired'),
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: t('emailPatternIsInvalid'),
                        },
                    }}
                    render={({ field }) => (
                        <Input
                            classNames={{
                                base: 'h-[75px]',
                            }}
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
                            classNames={{
                                base: 'h-[75px]',
                            }}
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
                                        <LuEyeOff className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <LuEye className="text-2xl text-default-400 pointer-events-none" />
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
                isLoading={loading}
            >
                {t('signIn')}
            </Button>
        </form>
    );
};

export default SignInForm;
