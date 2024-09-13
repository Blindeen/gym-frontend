import { useState } from 'react';

import toast from 'react-hot-toast';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@nextui-org/react';
import { LuEye, LuEyeOff } from 'react-icons/lu';

import useRequest from '@hooks/useRequest';
import { fieldClassNames, passwordRegex } from '@/values';
import { areStringsEqual } from '@/utils';

import { ChangePasswordData, ChangePasswordFormData, ChangePasswordFormProps } from './types';
import routes from '@/router/routes';

const ChangePasswordForm = ({ token, setChangePasswordSuccessful }: ChangePasswordFormProps) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ChangePasswordFormData>({
        defaultValues: {
            token,
            password: '',
            confirmPassword: '',
        },
    });
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { sendRequest, loadingRequest } = useRequest<ChangePasswordData>(
        '/member/change-password',
        'PUT',
        () => {
            setChangePasswordSuccessful(true);
            toast.success(t('passwordChangedSuccessfully'));
            setTimeout(() => navigate(routes.signIn, { replace: true }), 3000);
        }
    );

    const onValid = async (formData: ChangePasswordFormData) => {
        const { token, password } = formData;
        await sendRequest({ token, password });
    };

    return (
        <form
            className="flex w-10/12 flex-col gap-y-2 md:w-2/5 lg:w-1/5"
            onSubmit={handleSubmit(onValid)}
        >
            <Controller
                control={control}
                name="password"
                rules={{
                    required: t('passwordIsRequired'),
                    pattern: {
                        value: passwordRegex,
                        message: t('passwordPatternIsInvalid'),
                    },
                }}
                render={({ field }) => (
                    <Input
                        classNames={fieldClassNames}
                        type={passwordVisible ? 'text' : 'password'}
                        label={t('password')}
                        radius="lg"
                        size="sm"
                        endContent={
                            <button
                                className="focus:outline-none"
                                type="button"
                                onClick={() => setPasswordVisible((prevValue) => !prevValue)}
                            >
                                {passwordVisible ? (
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
                    required: t('confirmPasswordIsRequired'),
                    validate: (value, formValues) => {
                        const { password } = formValues;
                        return areStringsEqual(value, password) || t('passwordsAreNotIdentical');
                    },
                }}
                render={({ field }) => (
                    <Input
                        classNames={fieldClassNames}
                        type={confirmPasswordVisible ? 'text' : 'password'}
                        label={t('confirmPassword')}
                        radius="lg"
                        size="sm"
                        endContent={
                            <button
                                className="focus:outline-none"
                                type="button"
                                onClick={() => setConfirmPasswordVisible((prevValue) => !prevValue)}
                            >
                                {confirmPasswordVisible ? (
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

            <Button
                className="font-bold text-white"
                type="submit"
                color="primary"
                radius="lg"
                fullWidth
                isLoading={loadingRequest}
            >
                {t('submit')}
            </Button>
        </form>
    );
};

export default ChangePasswordForm;
