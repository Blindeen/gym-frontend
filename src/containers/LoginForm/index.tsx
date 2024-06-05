import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Button from '@/components/Button';
import Input from '@/components/Input';
import FormRow from '@/components/form/FormRow';
import FormError from '@/components/form/FormError';

import { AuthContext } from '@/AuthContext.tsx';
import type { AuthResponse, ErrorResponse, LoginForm } from '@/interfaces.ts';
import axios from '@/api.ts';
import routes from '@/routes.ts';

const LoginForm = () => {
    const { setState } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { isLoading, errors },
    } = useForm<LoginForm>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data: LoginForm) => {
        const res = axios.post<AuthResponse>('/member/login', data);

        res.then((res) => {
            const { data } = res;
            setState({
                isLogged: true,
                ...data,
            });
            toast('Logged in successfully', {
                type: 'success',
            });
            setTimeout(() => navigate(routes.home), 1500);
        }).catch((err) => {
            if (err.response) {
                const { error } = err.response.data as ErrorResponse;
                toast(error, {
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
                className="flex flex-col justify-between h-[210px] sm:w-[70%] md:w-[40%] lg:w-[20%]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormRow>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Email is required',
                        }}
                        render={({ field }) => (
                            <div className="w-full">
                                <Input type="text" label="Email" {...field} />
                                <FormError error={errors.email} />
                            </div>
                        )}
                    />
                </FormRow>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: 'Password is required',
                    }}
                    render={({ field }) => (
                        <div className="w-full">
                            <Input
                                type="password"
                                label="Password"
                                {...field}
                            />
                            <FormError error={errors.password} />
                        </div>
                    )}
                />
                <Button type="submit" disabled={isLoading}>
                    Sign up
                </Button>
            </form>
        </>
    );
};

export default LoginForm;
