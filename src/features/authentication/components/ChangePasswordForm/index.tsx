import toast from 'react-hot-toast';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';

import PasswordInput from '@components/PasswordInput';
import useRequest from '@hooks/useRequest';

import { routes } from '@/router';
import { areStringsEqual } from '@/utils';
import { FIELD_CLASS_NAMES, PASSWORD_REGEX } from '@/constants';

import { ChangePasswordData, ChangePasswordFormData, ChangePasswordFormProps } from './types';

const ChangePasswordForm = ({ token, setChangePasswordSuccessful }: ChangePasswordFormProps) => {
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
        '/members/password/change',
        'PUT',
        undefined,
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
                        value: PASSWORD_REGEX,
                        message: t('passwordPatternIsInvalid'),
                    },
                }}
                render={({ field }) => (
                    <PasswordInput
                        classNames={FIELD_CLASS_NAMES}
                        label={t('password')}
                        radius="lg"
                        size="sm"
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
                    <PasswordInput
                        classNames={FIELD_CLASS_NAMES}
                        label={t('confirmPassword')}
                        radius="lg"
                        size="sm"
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
