import { useContext } from 'react';

import toast from 'react-hot-toast';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, DatePicker, Divider, Input } from '@nextui-org/react';
import { parseDate } from '@internationalized/date';

import PasswordInput from '@components/PasswordInput';
import LoadingSpinner from '@components/LoadingSpinner';
import ImageInput from '@components/ImageInput';

import useFetch from '@hooks/useFetch';
import useRequest from '@hooks/useRequest';
import {
    FIELD_CLASS_NAMES,
    PASSWORD_REGEX,
    PHONE_NUMBER_REGEX,
    POSTAL_CODE_REGEX,
} from '@/constants';
import { AuthContext } from '@/contexts/AuthContext';
import { base64ToFile } from '@/utils';

import { EditProfileFormData, EditProfileData } from './types';
import { defaultValues } from './values';

const EditProfileForm = () => {
    const { state, setState } = useContext(AuthContext);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        getValues,
    } = useForm<EditProfileFormData>({ defaultValues });
    const { t } = useTranslation();

    const { isLoading } = useFetch<EditProfileData>(
        '/forms/edit-profile',
        undefined,
        (data) => {
            const { birthdate, profilePicture, ...rest } = data;
            reset({
                ...rest,
                password: '',
                newPassword: '',
                birthdate: parseDate(birthdate),
                profilePicture: base64ToFile(profilePicture),
            });
        }
    );
    const { sendRequest, loadingRequest } = useRequest<FormData, EditProfileData>(
        '/members/update',
        'PUT',
        { 'Content-Type': 'multipart/form-data' },
        (data) => {
            const { firstName, lastName, profilePicture } = data;
            setState({ ...state, user: { ...state.user, firstName, lastName, profilePicture } });
            setValue('password', '');
            setValue('newPassword', '');
            toast.success(t('profileHasBeenEdited'));
        }
    );

    if (isLoading) {
        return <LoadingSpinner />;
    }

    const onValid = async (formData: EditProfileFormData) => {
        const { email, birthdate, profilePicture, ...rest } = formData;

        const requestData = new FormData();
        requestData.append(
            'requestBody',
            new Blob([JSON.stringify(rest)], { type: 'application/json' })
        );
        profilePicture && requestData.append('profilePicture', profilePicture);

        await sendRequest(requestData);
    };

    const fieldBasicRules = {
        required: t('thisFieldIsRequired'),
    };

    return (
        <form className="flex flex-col items-center" onSubmit={handleSubmit(onValid)}>
            <div className="flex w-full flex-col gap-y-5 md:w-1/2">
                <div className="flex justify-center">
                    <Controller
                        control={control}
                        name="profilePicture"
                        render={({ field: { name, ref } }) => (
                            <ImageInput
                                name={name}
                                ref={ref}
                                src={getValues('profilePicture')}
                                fallback={`${getValues('firstName')[0]}${getValues('lastName')[0]}`}
                                onChange={(e) => {
                                    const fileList = e.target.files;
                                    if (fileList) {
                                        setValue('profilePicture', fileList[0]);
                                    }
                                }}
                            />
                        )}
                    />
                </div>

                <Divider />

                <div>
                    <h3 className="mb-5">{t('basicData')}</h3>
                    <Controller
                        control={control}
                        name="firstName"
                        rules={fieldBasicRules}
                        render={({ field }) => (
                            <Input
                                classNames={FIELD_CLASS_NAMES}
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
                                classNames={FIELD_CLASS_NAMES}
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
                        render={({ field }) => (
                            <DatePicker
                                classNames={FIELD_CLASS_NAMES}
                                label={t('birthdate')}
                                {...field}
                                showMonthAndYearPickers
                                isDisabled
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <Input
                                classNames={FIELD_CLASS_NAMES}
                                type="text"
                                label="Email"
                                radius="lg"
                                size="sm"
                                {...field}
                                isDisabled
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
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
                        name="newPassword"
                        rules={{
                            pattern: {
                                value: PASSWORD_REGEX,
                                message: t('passwordPatternIsInvalid'),
                            },
                        }}
                        render={({ field }) => (
                            <PasswordInput
                                classNames={FIELD_CLASS_NAMES}
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
                                classNames={FIELD_CLASS_NAMES}
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
                                classNames={FIELD_CLASS_NAMES}
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
                                value: POSTAL_CODE_REGEX,
                                message: t('postalCodePatternIsInvalid'),
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                classNames={FIELD_CLASS_NAMES}
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
                                value: PHONE_NUMBER_REGEX,
                                message: t('phoneNumberPatternIsInvalid'),
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                classNames={FIELD_CLASS_NAMES}
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
                </div>

                <Button
                    className="font-bold text-white"
                    type="submit"
                    color="primary"
                    radius="lg"
                    fullWidth
                    isLoading={loadingRequest}
                >
                    {t('edit')}
                </Button>
            </div>
        </form>
    );
};

export default EditProfileForm;
