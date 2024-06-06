import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Input from '@/components/Input';
import Button from '@/components/Button';
import FormError from '@/components/form/FormError';
import Select from '@/components/Select';

import type { ActivityForm, ErrorResponse } from '@/interfaces.ts';
import axios from '@/api.ts';
import { AuthContext } from '@/AuthContext.tsx';
import { useContext } from 'react';

const daysOfWeek = [
    { label: 'Monday', value: 'MONDAY' },
    { label: 'Tuesday', value: 'TUESDAY' },
    { label: 'Wednesday', value: 'WEDNESDAY' },
    { label: 'Thursday', value: 'THURSDAY' },
    { label: 'Friday', value: 'FRIDAY' },
    { label: 'Saturday', value: 'SATURDAY' },
    { label: 'Sunday', value: 'SUNDAY' },
];

const rooms = [
    { label: 'A2', value: '1' },
    { label: 'B5', value: '2' },
    { label: 'G7', value: '3' },
];

interface ActivityFormProps {
    fetchActivities: () => void;
}

const ActivityForm = ({ fetchActivities }: ActivityFormProps) => {
    const { state } = useContext(AuthContext);
    const {
        control,
        reset,
        handleSubmit,
        formState: { isLoading, errors },
    } = useForm<ActivityForm>({
        defaultValues: {
            name: '',
            dayOfWeek: '',
            startTime: '',
            endTime: '',
            roomId: '',
        },
    });

    const onSubmit = (data: ActivityForm) => {
        const res = axios.post('/activity/create', data, {
            headers: {
                Authorization: `Bearer ${state.token}`,
            },
        });

        res.then(() => {
            toast('Activity has been created', {
                type: 'success',
            });
            fetchActivities();
            reset();
        }).catch((err) => {
            console.log(err);
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
                className="flex flex-col gap-8 w-[40%]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: 'Name is required',
                    }}
                    render={({ field }) => (
                        <div className="w-full">
                            <Input type="text" label="Name" {...field} />
                            <FormError error={errors.name} />
                        </div>
                    )}
                />
                <Controller
                    name="dayOfWeek"
                    control={control}
                    rules={{
                        required: 'Day of week is required',
                    }}
                    render={({ field }) => (
                        <div className="w-full">
                            <Select
                                options={daysOfWeek}
                                label="Day of week"
                                {...field}
                            />
                            <FormError error={errors.dayOfWeek} />
                        </div>
                    )}
                />
                <Controller
                    name="startTime"
                    control={control}
                    rules={{
                        required: 'Start time is required',
                    }}
                    render={({ field }) => (
                        <div className="w-full">
                            <Input type="time" label="Start time" {...field} />
                            <FormError error={errors.startTime} />
                        </div>
                    )}
                />
                <Controller
                    name="endTime"
                    control={control}
                    rules={{
                        required: 'End time is required',
                    }}
                    render={({ field }) => (
                        <div className="w-full">
                            <Input type="time" label="End time" {...field} />
                            <FormError error={errors.endTime} />
                        </div>
                    )}
                />
                <Controller
                    name="roomId"
                    control={control}
                    rules={{
                        required: 'Room ID is required',
                    }}
                    render={({ field }) => (
                        <div className="w-full">
                            <Select
                                options={rooms}
                                label="Room ID"
                                {...field}
                            />
                            <FormError error={errors.roomId} />
                        </div>
                    )}
                />
                <Button type="submit" disabled={isLoading}>
                    Save
                </Button>
            </form>
        </>
    );
};

export default ActivityForm;
