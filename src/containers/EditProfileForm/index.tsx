import { useEffect } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, DatePicker, Divider, Input, Select, SelectItem } from '@nextui-org/react';

import PasswordInput from '@components/PasswordInput';
import LoadingSpinner from '@components/LoadingSpinner';

import useFetch from '@hooks/useFetch';
import useRequest from '@hooks/useRequest';
import {
    emailRegex,
    fieldClassNames,
    passwordRegex,
    phoneNumberRegex,
    postalCodeRegex,
} from '@/values';
import { areStringsEqual, isUserAdult } from '@/utils';

import { EditProfileFormData, EditProfileRequestData, PrepareEditProfileFormData } from './types';
import { defaultValues } from './values';

const EditProfileForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<EditProfileFormData>({ defaultValues: defaultValues });
    const { t } = useTranslation();

    const { data, isLoading } = useFetch<PrepareEditProfileFormData>('/form/edit-profile/prepare');
    const { sendRequest, loadingRequest } = useRequest<EditProfileRequestData>(
        '/member/update',
        'PUT'
    );

    useEffect(() => {
        if (data) {
            const { userData } = data;
            reset(userData);
        }
    }, [data]);

    // if (isLoading) {
    //     return <LoadingSpinner />;
    // }

    const onValid = async (formData: EditProfileFormData) => {
        const { birthdate } = formData;
        await sendRequest({
            ...formData,
            birthdate: birthdate.toString(),
        });
    };

    const fieldBasicRules = {
        required: t('thisFieldIsRequired'),
    };

    return (
        <form className="flex flex-col items-center" onSubmit={handleSubmit(onValid)}>
            <div className="flex w-full flex-col gap-y-5 md:w-1/2">
                <Divider />

                <div>
                    <h3 className="mb-5">{t('basicData')}</h3>
                    <Controller
                        control={control}
                        name="firstName"
                        rules={fieldBasicRules}
                        render={({ field }) => (
                            <Input
                                classNames={fieldClassNames}
                                type="text"
                                label={t('firstName')}
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
                        rules={fieldBasicRules}
                        render={({ field }) => (
                            <Input
                                classNames={fieldClassNames}
                                type="text"
                                label={t('lastName')}
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
                        name="birthdate"
                        rules={{
                            ...fieldBasicRules,
                            validate: (birthdate) => isUserAdult(birthdate) || t('userIsNotAdult'),
                        }}
                        render={({ field }) => (
                            <DatePicker
                                classNames={fieldClassNames}
                                label={t('birthdate')}
                                errorMessage={errors.birthdate?.message}
                                {...field}
                                isInvalid={!!errors.birthdate}
                                showMonthAndYearPickers
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            ...fieldBasicRules,
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
                            ...fieldBasicRules,
                            pattern: {
                                value: passwordRegex,
                                message: t('passwordPatternIsInvalid'),
                            },
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

                    <Controller
                        control={control}
                        name="newPassword"
                        rules={{
                            ...fieldBasicRules,
                            validate: (value, formValues) => {
                                const { password } = formValues;
                                return (
                                    areStringsEqual(value, password) ||
                                    t('passwordsAreNotIdentical')
                                );
                            },
                        }}
                        render={({ field }) => (
                            <PasswordInput
                                classNames={fieldClassNames}
                                label={t('newPassword')}
                                radius="lg"
                                size="sm"
                                errorMessage={errors.newPassword?.message}
                                {...field}
                                isInvalid={!!errors.newPassword}
                            />
                        )}
                    />
                </div>

                <Divider />

                <div>
                    <h3 className="mb-5">{t('contactDetails')}</h3>
                    <Controller
                        control={control}
                        name="addressLine"
                        rules={fieldBasicRules}
                        render={({ field }) => (
                            <Input
                                classNames={fieldClassNames}
                                type="text"
                                label={t('addressLine')}
                                radius="lg"
                                size="sm"
                                errorMessage={errors.addressLine?.message}
                                {...field}
                                isInvalid={!!errors.addressLine}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="city"
                        rules={fieldBasicRules}
                        render={({ field }) => (
                            <Input
                                classNames={fieldClassNames}
                                type="text"
                                label={t('city')}
                                radius="lg"
                                size="sm"
                                errorMessage={errors.city?.message}
                                {...field}
                                isInvalid={!!errors.city}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="postalCode"
                        rules={{
                            ...fieldBasicRules,
                            pattern: {
                                value: postalCodeRegex,
                                message: t('postalCodePatternIsInvalid'),
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                classNames={fieldClassNames}
                                type="text"
                                label={t('postalCode')}
                                radius="lg"
                                size="sm"
                                errorMessage={errors.postalCode?.message}
                                {...field}
                                isInvalid={!!errors.postalCode}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="phoneNumber"
                        rules={{
                            ...fieldBasicRules,
                            pattern: {
                                value: phoneNumberRegex,
                                message: t('phoneNumberPatternIsInvalid'),
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                classNames={fieldClassNames}
                                type="tel"
                                label={t('phoneNumber')}
                                radius="lg"
                                size="sm"
                                errorMessage={errors.phoneNumber?.message}
                                {...field}
                                isInvalid={!!errors.phoneNumber}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="paymentMethod"
                        rules={fieldBasicRules}
                        render={({ field }) => (
                            <Select
                                classNames={fieldClassNames}
                                label={t('paymentMethod')}
                                radius="lg"
                                size="sm"
                                items={data?.paymentMethods ?? []}
                                errorMessage={errors.paymentMethod?.message}
                                {...field}
                                isInvalid={!!errors.paymentMethod}
                            >
                                {(paymentMethod) => (
                                    <SelectItem key={paymentMethod.id}>
                                        {paymentMethod.name}
                                    </SelectItem>
                                )}
                            </Select>
                        )}
                    />

                    <Controller
                        control={control}
                        name="passType"
                        rules={fieldBasicRules}
                        render={({ field }) => (
                            <Select
                                classNames={fieldClassNames}
                                label={t('passType')}
                                radius="lg"
                                size="sm"
                                items={data?.passes ?? []}
                                errorMessage={errors.passType?.message}
                                {...field}
                                isInvalid={!!errors.passType}
                            >
                                {(pass) => <SelectItem key={pass.id}>{pass.name}</SelectItem>}
                            </Select>
                        )}
                    />
                </div>
            </div>

            <div className="flex w-full justify-center md:w-1/2 lg:w-1/2">
                <Button
                    className="font-bold text-white"
                    type="submit"
                    color="primary"
                    radius="lg"
                    isLoading={loadingRequest}
                >
                    {t('edit')}
                </Button>
            </div>
        </form>
    );
};

export default EditProfileForm;
