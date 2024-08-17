import { useContext, useState } from 'react';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Input } from '@nextui-org/react';
import { LuEye, LuEyeOff } from 'react-icons/lu';

import { SignUpFormData } from '@/components/SignUpForm/types.ts';

import axiosClient from '@/axios';
import routes from '@/router/routes.ts';
import { AuthorizationResponse } from '@/types.ts';
import { AuthContext } from '@/context';
import { handleError } from '@/axios/functions.ts';

const SignUpForm = () => {
    const { setState } = useContext(AuthContext);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false);
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });
    const navigate = useNavigate();
    const { t } = useTranslation();

    const onValid = async (formData: SignUpFormData) => {
        setLoading(true);
        try {
            const { data } = await axiosClient.post<AuthorizationResponse>(
                '/member/sign-up',
                formData
            );

            setState({
                isLogged: true,
                ...data,
            });
            toast.success(t('signedInSuccessfully'));
            navigate(routes.home, { replace: true });
        } catch (err) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            className="flex flex-col gap-y-2"
            onSubmit={handleSubmit(onValid)}
        >
            <div>
                <Controller
                    control={control}
                    name="firstName"
                    rules={{
                        required: t('signUpForm.firstNameIsRequired'),
                    }}
                    render={({ field }) => (
                        <Input
                            classNames={{
                                base: 'h-[75px]',
                            }}
                            type="text"
                            label={t('signUpForm.firstName')}
                            radius="lg"
                            size="sm"
                            errorMessage={errors.firstName?.message}
                            {...field}
                            isInvalid={!!errors.firstName}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="lastName"
                    rules={{
                        required: t('signUpForm.lastNameIsRequired'),
                    }}
                    render={({ field }) => (
                        <Input
                            classNames={{
                                base: 'h-[75px]',
                            }}
                            type="text"
                            label={t('signUpForm.lastName')}
                            radius="lg"
                            size="sm"
                            errorMessage={errors.lastName?.message}
                            {...field}
                            isInvalid={!!errors.lastName}
                        />
                    )}
                />
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
                                    onClick={() =>
                                        setIsPasswordVisible(
                                            (prevValue) => !prevValue
                                        )
                                    }
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
                <Controller
                    control={control}
                    name="confirmPassword"
                    rules={{
                        required: t('passwordIsRequired'),
                        validate: (value, formValues) =>
                            value === formValues.password ||
                            t('signUpForm.passwordsAreNotIdentical'),
                    }}
                    render={({ field }) => (
                        <Input
                            classNames={{
                                base: 'h-[75px]',
                            }}
                            type={
                                isConfirmPasswordVisible ? 'text' : 'password'
                            }
                            label={t('signUpForm.confirmPassword')}
                            radius="lg"
                            size="sm"
                            endContent={
                                <button
                                    className="focus:outline-none"
                                    type="button"
                                    onClick={() =>
                                        setIsConfirmPasswordVisible(
                                            (prevValue) => !prevValue
                                        )
                                    }
                                >
                                    {isConfirmPasswordVisible ? (
                                        <LuEyeOff className="pointer-events-none text-2xl text-default-400" />
                                    ) : (
                                        <LuEye className="pointer-events-none text-2xl text-default-400" />
                                    )}
                                </button>
                            }
                            errorMessage={errors.confirmPassword?.message}
                            {...field}
                            isInvalid={!!errors.confirmPassword}
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
                {t('signUp')}
            </Button>
        </form>
    );
};

export default SignUpForm;
