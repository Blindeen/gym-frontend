import { Controller, useForm } from 'react-hook-form';

import Input from '@/components/Input';
import Button from '@/components/Button';

import type { ActivityForm } from '@/interfaces.ts';
import FormError from '@/components/form/FormError';
import Select from '@/components/Select';

const daysOfWeek = [
    { label: 'Monday', value: 'MONDAY' },
    { label: 'Tuesday', value: 'TUESDAY' },
    { label: 'Wednesday', value: 'WEDNESDAY' },
    { label: 'Thursday', value: 'THURSDAY' },
    { label: 'Friday', value: 'FRIDAY' },
    { label: 'Saturday', value: 'SATURDAY' },
    { label: 'Sunday', value: 'SUNDAY' },
];

const ActivityForm = () => {
    const {
        control,
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
        console.log(data);
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
                            <Select options={[]} label="Room ID" {...field} />
                            <FormError error={errors.roomId} />
                        </div>
                    )}
                />
                <Button type="submit" disabled={isLoading}>
                    Add
                </Button>
            </form>
        </>
    );
};

export default ActivityForm;
