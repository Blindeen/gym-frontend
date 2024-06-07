import { useCallback, useContext, useEffect, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Select from '@/components/Select';
import Button from '@/components/Button';

import { AuthContext } from '@/AuthContext.tsx';
import axios from '@/api.ts';
import FormError from '@/components/form/FormError';
import { ActivitiesResponse } from '@/interfaces.ts';

interface EnrollActivityForm {
    activityId: string;
}

interface EnrollActivityFormProps {
    myActivities: ActivitiesResponse;
    fetchMyActivities: () => void;
}

const EnrollActivityForm = ({
    myActivities,
    fetchMyActivities,
}: EnrollActivityFormProps) => {
    const { state } = useContext(AuthContext);
    const {
        control,
        reset,
        handleSubmit,
        formState: { isLoading, errors },
    } = useForm<EnrollActivityForm>({
        defaultValues: {
            activityId: '',
        },
    });
    const [activities, setActivities] = useState<ActivitiesResponse['content']>(
        []
    );

    const fetchAllActivities = useCallback(() => {
        const res = axios.get<ActivitiesResponse>('/activity/list');

        res.then((res) => {
            const { data } = res;
            const myActivityIds = myActivities.content.map(
                (activity) => activity.id
            );
            const filteredActivities = data.content.filter(
                (activity) => !myActivityIds.includes(activity.id)
            );
            setActivities(filteredActivities);
        }).catch(() => {
            toast('An error occurred', {
                type: 'error',
            });
        });
    }, [myActivities]);

    useEffect(() => {
        fetchAllActivities();
    }, [fetchAllActivities]);

    const onSubmit = (data: EnrollActivityForm) => {
        const { activityId } = data;
        const res = axios.post(`/activity/${activityId}/enroll`, null, {
            headers: {
                Authorization: `Bearer ${state.token}`,
            },
        });

        res.then(() => {
            toast('Enrolled successfully', {
                type: 'success',
            });
            fetchMyActivities();
            reset();
        }).catch(() => {
            toast('An error occurred', {
                type: 'error',
            });
        });
    };

    return (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="activityId"
                control={control}
                rules={{
                    required: 'Choose an activity to enroll in',
                }}
                render={({ field }) => (
                    <div>
                        <Select
                            label="Activity"
                            options={activities.map((activity) => {
                                return {
                                    value: activity.id,
                                    label: activity.name,
                                };
                            })}
                            {...field}
                        />
                        <FormError error={errors.activityId} />
                    </div>
                )}
            />
            <Button size="full" disabled={isLoading}>
                Enroll
            </Button>
        </form>
    );
};

export default EnrollActivityForm;
