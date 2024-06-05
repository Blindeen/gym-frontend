import { useContext } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Button from '@/components/Button';
import Input from '@/components/Input';
import FormRow from '@/components/form/FormRow';
import FormError from '@/components/form/FormError';
import Select from '@/components/Select';
import Toast from '@/components/Toast';

import { AuthContext } from '@/AuthContext.tsx';
import type {
    AuthResponse,
    RegisterForm,
    ErrorResponse,
} from '@/interfaces.ts';
import axios from '@/api.ts';

import paymentMethodOptions from '@/containers/RegisterForm/paymentMethodOptions.ts';
import passTypeOptions from '@/containers/RegisterForm/passTypeOptions.ts';

const RegisterForm = () => {
    const { setState } = useContext(AuthContext);
    const {
        control,
        handleSubmit,
        formState: { isLoading, errors },
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

    const onSubmit = async (data: RegisterForm) => {
        const res = axios.post<AuthResponse>('/member/register', data);

        res.then((res) => {
            const { data } = res;
            setState({
                isLogged: true,
                ...data,
            });
            toast('Registered successfully', {
                type: 'success',
            });
        }).catch((err) => {
            if (err.response) {
                const errorRes = err.response.data as ErrorResponse;
                toast(errorRes.error, {
                    type: 'error',
                });
            } else {
                toast('An error occurred', {
                    type: 'error',
                });
            }
        });
    };

    return (
        <>
            <form
                className="flex flex-col flex-grow justify-between min-w-[30%]"
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
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="First name"
                                    {...field}
                                    isRequired
                                />
                                <FormError error={errors.firstName} />
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
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Last name"
                                    {...field}
                                    isRequired
                                />
                                <FormError error={errors.lastName} />
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
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Email"
                                    {...field}
                                    isRequired
                                />
                                <FormError error={errors.email} />
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
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Phone number"
                                    {...field}
                                    isRequired
                                />
                                <FormError error={errors.phoneNumber} />
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
                        <div className="w-full">
                            <Input
                                type="text"
                                label="Address"
                                {...field}
                                isRequired
                            />
                            <FormError error={errors.addressLine} />
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
                                message: 'Invalid postal code',
                            },
                        }}
                        render={({ field }) => (
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Postal code"
                                    {...field}
                                    isRequired
                                />
                                <FormError error={errors.postalCode} />
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
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="City"
                                    {...field}
                                    isRequired
                                />
                                <FormError error={errors.city} />
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
                        <div className="w-full">
                            <Input
                                type="date"
                                label="Birthdate"
                                {...field}
                                isRequired
                            />
                            <FormError error={errors.birthdate} />
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
                                <FormError error={errors.paymentMethod} />
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
                                <FormError error={errors.passType} />
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
                        <div className="w-full">
                            <Input
                                type="password"
                                label="Password"
                                {...field}
                                isRequired
                            />
                            <FormError error={errors.password} />
                        </div>
                    )}
                />
                <Button type="submit" disabled={isLoading}>
                    Sign up
                </Button>
            </form>
            <Toast />
        </>
    );
};

export default RegisterForm;
