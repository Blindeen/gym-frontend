import { useState } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { Button, Input } from '@nextui-org/react';

import { SignInFormData } from '@/components/SignInForm/types.ts';

import { LuEye, LuEyeOff } from 'react-icons/lu';

const SignInForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    const login = (data: SignInFormData) => {
        console.log(data);
    };

    return (
        <form
            className="w-3/4 flex flex-col gap-y-10 md:w-3/4 lg:w-1/2"
            onSubmit={handleSubmit(login)}
        >
            <div className="flex flex-col gap-y-7">
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: 'Email is required',
                    }}
                    render={() => (
                        <Input
                            type="text"
                            label="Email"
                            radius="lg"
                            size="sm"
                            errorMessage={errors.email?.message}
                            isInvalid={!!errors.email}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={{
                        required: 'Password is required',
                    }}
                    render={() => (
                        <Input
                            type={isPasswordVisible ? 'text' : 'password'}
                            label="Password"
                            radius="lg"
                            size="sm"
                            endContent={
                                <button
                                    className="focus:outline-none"
                                    type="button"
                                    onClick={toggleVisibility}
                                >
                                    {isPasswordVisible ? (
                                        <LuEyeOff className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <LuEye className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            errorMessage={errors.password?.message}
                            isInvalid={!!errors.password}
                        />
                    )}
                />
            </div>
            <Button
                className="text-white"
                type="submit"
                color="primary"
                radius="lg"
                fullWidth
            >
                Sign in
            </Button>
        </form>
    );
};

export default SignInForm;
