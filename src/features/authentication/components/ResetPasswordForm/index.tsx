import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '@nextui-org/react';

import useRequest from '@hooks/useRequest';
import { emailRegex, fieldClassNames } from '@/values';

import { ResetPasswordFormData, ResetPasswordFormProps } from './types';

const ResetPasswordForm = ({ setPasswordResetSuccessful }: ResetPasswordFormProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordFormData>({
        defaultValues: {
            email: '',
        },
    });
    const { t } = useTranslation();

    const { sendRequest, loadingRequest } = useRequest<ResetPasswordFormData>(
        '/member/reset-password',
        'POST',
        undefined,
        () => setPasswordResetSuccessful(true)
    );

    const onValid = async (formData: ResetPasswordFormData) => await sendRequest(formData);

    return (
        <form className="flex w-full flex-col gap-y-3 md:w-3/4" onSubmit={handleSubmit(onValid)}>
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

export default ResetPasswordForm;
