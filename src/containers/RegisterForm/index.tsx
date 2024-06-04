import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/Input';
import FormRow from '@/components/form/FormRow';
import FormError from '@/components/form/FormError';
import Select from '@/components/Select';

import type { RegisterForm } from '@/interfaces.ts';

import paymentMethodOptions from '@/containers/RegisterForm/paymentMethodOptions.ts';
import passTypeOptions from '@/containers/RegisterForm/passTypeOptions.ts';

const RegisterForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            birthdate: '',
            addressLine: '',
            city: '',
            postalCode: '',
            phoneNumber: '',
            paymentMethod: '',
            passType: '',
        },
    });

    const onSubmit = (data: RegisterForm) => {
        console.log(data);
    };

    return (
        <form
            className="box-border flex flex-col gap-7"
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormRow>
                <Controller
                    name="firstName"
                    control={control}
                    rules={{
                        required: 'First name is required',
                    }}
                    render={({ field }) => (
                        <div>
                            <Input
                                type="text"
                                label="First name"
                                {...field}
                                isRequired
                            />
                            {errors.firstName && (
                                <FormError message={errors.firstName.message} />
                            )}
                        </div>
                    )}
                />
                <Controller
                    name="lastName"
                    control={control}
                    rules={{
                        required: 'Last name is required',
                    }}
                    render={({ field }) => (
                        <div>
                            <Input
                                type="text"
                                label="Last name"
                                {...field}
                                isRequired
                            />
                            {errors.lastName && (
                                <FormError message={errors.lastName.message} />
                            )}
                        </div>
                    )}
                />
            </FormRow>
            <FormRow>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Invalid email address',
                        },
                    }}
                    render={({ field }) => (
                        <div>
                            <Input
                                type="text"
                                label="Email"
                                {...field}
                                isRequired
                            />
                            {errors.email && (
                                <FormError message={errors.email.message} />
                            )}
                        </div>
                    )}
                />
                <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{
                        required: 'Phone number is required',
                        pattern: {
                            value: /^(\+\d{1,3})(\d{9})$/,
                            message: 'Invalid phone number',
                        },
                    }}
                    render={({ field }) => (
                        <div>
                            <Input
                                type="text"
                                label="Phone number"
                                {...field}
                                isRequired
                            />
                            {errors.phoneNumber && (
                                <FormError
                                    message={errors.phoneNumber.message}
                                />
                            )}
                        </div>
                    )}
                />
            </FormRow>
            <Controller
                name="addressLine"
                control={control}
                rules={{
                    required: 'Address is required',
                }}
                render={({ field }) => (
                    <div>
                        <Input
                            type="text"
                            label="Address"
                            {...field}
                            isRequired
                        />
                        {errors.addressLine && (
                            <FormError message={errors.addressLine.message} />
                        )}
                    </div>
                )}
            />
            <FormRow>
                <Controller
                    name="postalCode"
                    control={control}
                    rules={{
                        required: 'Postal code is required',
                        pattern: {
                            value: /^\d{5}([ -]\d{4})?$/,
                            message: 'Invalid zip code',
                        },
                    }}
                    render={({ field }) => (
                        <div>
                            <Input
                                type="text"
                                label="Zip code"
                                {...field}
                                isRequired
                            />
                            {errors.postalCode && (
                                <FormError
                                    message={errors.postalCode.message}
                                />
                            )}
                        </div>
                    )}
                />
                <Controller
                    name="city"
                    control={control}
                    rules={{
                        required: 'City is required',
                    }}
                    render={({ field }) => (
                        <div>
                            <Input
                                type="text"
                                label="City"
                                {...field}
                                isRequired
                            />
                            {errors.city && (
                                <FormError message={errors.city.message} />
                            )}
                        </div>
                    )}
                />
            </FormRow>
            <Controller
                name="birthdate"
                control={control}
                rules={{
                    required: 'Birthdate is required',
                    pattern: {
                        value: /^\d{4}-\d{2}-\d{2}$/,
                        message: 'Invalid birthdate',
                    },
                }}
                render={({ field }) => (
                    <div>
                        <Input
                            type="date"
                            label="Birthdate"
                            {...field}
                            isRequired
                        />
                        {errors.birthdate && (
                            <FormError message={errors.birthdate.message} />
                        )}
                    </div>
                )}
            />
            <FormRow>
                <Controller
                    name="paymentMethod"
                    control={control}
                    rules={{
                        required: 'Payment method is required',
                    }}
                    render={({ field }) => (
                        <div className="w-full">
                            <Select
                                label="Payment method"
                                {...field}
                                options={paymentMethodOptions}
                                isRequired
                            />
                            {errors.paymentMethod && (
                                <FormError
                                    message={errors.paymentMethod.message}
                                />
                            )}
                        </div>
                    )}
                />
                <Controller
                    name="passType"
                    control={control}
                    rules={{
                        required: 'Pass type is required',
                    }}
                    render={({ field }) => (
                        <div className="w-full">
                            <Select
                                label="Pass type"
                                {...field}
                                options={passTypeOptions}
                                isRequired
                            />
                            {errors.passType && (
                                <FormError message={errors.passType.message} />
                            )}
                        </div>
                    )}
                />
            </FormRow>
            <Controller
                name="password"
                control={control}
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                        message:
                            'At least one uppercase letter, one lowercase letter, and one number',
                    },
                }}
                render={({ field }) => (
                    <div>
                        <Input
                            type="password"
                            label="Password"
                            {...field}
                            isRequired
                        />
                        {errors.password && (
                            <FormError message={errors.password.message} />
                        )}
                    </div>
                )}
            />
            <Button type="submit">Sign up</Button>
        </form>
    );
};

export default RegisterForm;
