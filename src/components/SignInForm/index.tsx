import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { Button, Input } from '@nextui-org/react';
import { LuEye, LuEyeOff } from 'react-icons/lu';

import { SignInFormData } from '@/components/SignInForm/types.ts';

import axios from '@/api.ts';
import routes from '@/routes.ts';
import { ResponseError, AuthorizationResponse } from '@/types.ts';
import { AuthContext } from '@/AuthContext.tsx';
import { useTranslation } from 'react-i18next';

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
        axios
            .post<AuthorizationResponse>('/member/login', data)
            .then(({ data }) => {
                setState({
                    isLogged: true,
                    ...data,
                });
                toast.success('Signed in successfully');
                setTimeout(() => navigate(routes.home), 2000);
            })
            .catch((err: ResponseError | AxiosError<ResponseError>) =>
                console.log(err)
            )
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
                        required: 'Email is required',
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: 'Email pattern is invalid',
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
                        required: 'Password is required',
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
                className="text-white"
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
