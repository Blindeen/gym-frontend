import { useContext, useState } from 'react';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
    Button,
    Input,
    Select,
    SelectItem,
    Checkbox,
    Skeleton,
} from '@nextui-org/react';
import { DatePicker } from '@nextui-org/date-picker';
import { Link } from '@nextui-org/link';
import { LuEye, LuEyeOff } from 'react-icons/lu';

import axiosClient from '@/axios';
import routes from '@/router/routes.ts';
import useFetch from '@/hooks/useFetch/index.ts';
import { AuthorizationResponse } from '@/types.ts';
import { AuthContext } from '@/context';
import { handleError } from '@/axios/functions.ts';
import { areStringsEqual, isUserAdult } from '@/utils';
import {
    emailRegex,
    fieldClassNames,
    passwordRegex,
    phoneNumberRegex,
    postalCodeRegex,
} from '@/values.ts';

import { SignUpFormData, PrepareSignUpFormData } from './types.ts';
import { defaultFormValues } from './values.ts';

const SignUpForm = () => {
    const { setState } = useContext(AuthContext);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false);
    const [loading, setLoading] = useState(false);
    const { data, isLoading } = useFetch<PrepareSignUpFormData>(
        '/form/sign-up/prepare'
    );

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

    const onValid = async (formData: SignUpFormData) => {
        setLoading(true);

        const { confirmPassword, birthdate, ...rest } = formData;
        try {
            const { data } = await axiosClient.post<AuthorizationResponse>(
                '/member/sign-up',
                {
                    birthdate: birthdate.toString(),
                    ...rest,
                }
            );

            setState({
                isLogged: true,
                ...data,
            });
            toast.success(t('signedUpSuccessfully'));
            navigate(routes.home, { replace: true });
        } catch (err) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    const fieldBasicRules = {
        required: t('thisFieldIsRequired'),
    };

    return (
        <Skeleton className="rounded-lg" isLoaded={!isLoading}>
            <form
                className="flex flex-col gap-y-2"
                onSubmit={handleSubmit(onValid)}
            >
                <div className="flex flex-col lg:flex-row lg:gap-5">
                    <div className="w-full">
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
                                validate: (birthdate) =>
                                    isUserAdult(birthdate) ||
                                    t('userIsNotAdult'),
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
                                <Input
                                    classNames={fieldClassNames}
                                    type={
                                        isPasswordVisible ? 'text' : 'password'
                                    }
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
                                <Input
                                    classNames={fieldClassNames}
                                    type={
                                        isConfirmPasswordVisible
                                            ? 'text'
                                            : 'password'
                                    }
                                    label={t('confirmPassword')}
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
                                    errorMessage={
                                        errors.confirmPassword?.message
                                    }
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
                                    {(pass) => (
                                        <SelectItem key={pass.id}>
                                            {pass.name}
                                        </SelectItem>
                                    )}
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
                    isLoading={loading}
                >
                    {t('signUp')}
                </Button>
            </form>
        </Skeleton>
    );
};

export default SignUpForm;
