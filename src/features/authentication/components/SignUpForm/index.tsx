import { useContext } from 'react';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Input, Select, SelectItem, Checkbox, Skeleton } from '@nextui-org/react';
import { DatePicker } from '@nextui-org/date-picker';
import { Link } from '@nextui-org/link';

import PasswordInput from '@components/PasswordInput';

import { routes } from '@/router';
import useFetch from '@hooks/useFetch';
import useRequest from '@hooks/useRequest';
import { AuthorizationResponse } from '@/types.ts';
import { AuthContext } from '@/contexts/AuthContext/index.tsx';
import { areStringsEqual, isUserAdult } from '@/utils';
import {
    EMAIL_REGEX,
    FIELD_CLASS_NAMES,
    PASSWORD_REGEX,
    PHONE_NUMBER_REGEX,
    POSTAL_CODE_REGEX,
} from '@/constants.ts';

import { SignUpFormData, PrepareSignUpFormData, SignUpRequestData } from './types.ts';
import { defaultFormValues } from './values.ts';

const SignUpForm = () => {
    const { setState } = useContext(AuthContext);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>({ defaultValues: defaultFormValues });
    const navigate = useNavigate();
    const {
        i18n: { language },
        t,
    } = useTranslation();

    const { data, isLoading } = useFetch<PrepareSignUpFormData>('/forms/sign-up');
    const { sendRequest, loadingRequest } = useRequest<SignUpRequestData, AuthorizationResponse>(
        '/auth/sign-up',
        'POST',
        undefined,
        (data) => {
            setState({
                isLogged: true,
                ...data,
            });
            toast.success(t('signedUpSuccessfully'));
            navigate(routes.home, { replace: true });
        }
    );

    const onValid = async (formData: SignUpFormData) => {
        const { confirmPassword, birthdate, agreement, ...rest } = formData;
        await sendRequest({
            ...rest,
            birthdate: birthdate.toString(),
        });
    };

    const fieldBasicRules = {
        required: t('thisFieldIsRequired'),
    };

    return (
        <Skeleton className="rounded-lg" isLoaded={!isLoading}>
            <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onValid)}>
                <div className="flex flex-col lg:flex-row lg:gap-5">
                    <div className="w-full">
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
                            rules={{
                                ...fieldBasicRules,
                                validate: (birthdate) =>
                                    isUserAdult(birthdate) || t('userIsNotAdult'),
                            }}
                            render={({ field }) => (
                                <DatePicker
                                    classNames={FIELD_CLASS_NAMES}
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
                                    value: EMAIL_REGEX,
                                    message: t('emailPatternIsInvalid'),
                                },
                            }}
                            render={({ field }) => (
                                <Input
                                    classNames={FIELD_CLASS_NAMES}
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
                    </div>

                    <div className="w-full">
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

                        <Controller
                            control={control}
                            name="paymentMethod"
                            rules={fieldBasicRules}
                            render={({ field }) => (
                                <Select
                                    classNames={FIELD_CLASS_NAMES}
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
                                    classNames={FIELD_CLASS_NAMES}
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

                <Controller
                    control={control}
                    name="agreement"
                    rules={fieldBasicRules}
                    render={({ field: { onChange, value } }) => (
                        <Checkbox
                            classNames={{
                                base: 'items-start gap-x-2 py-0 mb-3',
                                label: 'text-sm',
                            }}
                            onChange={onChange}
                            isSelected={value}
                            isInvalid={!!errors.agreement}
                        >
                            {t('agreement')}
                            <Link
                                className="text-sm"
                                href={`/pdfs/terms-and-conditions-${language}.pdf`}
                                isExternal
                            >
                                {t('termsAndConditions')}
                            </Link>
                        </Checkbox>
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
                    {t('signUp')}
                </Button>
            </form>
        </Skeleton>
    );
};

export default SignUpForm;
