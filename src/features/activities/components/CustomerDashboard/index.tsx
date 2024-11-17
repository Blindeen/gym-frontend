import toast from 'react-hot-toast';
import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

import CustomTable from '@components/CustomTable';

import useSearchParams from '@hooks/useSearchParams';
import useFetch from '@hooks/useFetch';

import { authenticatedInstance } from '@/api';
import { handleError } from '@/api/functions';

import { Page } from '@/types';
import { CustomerActivity } from './types';

const CustomerDashboard = () => {
    const { t } = useTranslation();

    const { searchParams, setSearchParams } = useSearchParams({
        pageNumber: 1,
        pageSize: 5,
        name: '',
    });
    const { data, isLoading, fetchData } = useFetch<Page<CustomerActivity>>(
        '/members/customers/activities',
        searchParams
    );

    const enrollForActivity = async (activityID: number) => {
        try {
            await authenticatedInstance.post(`/activities/${activityID}/enrollment`);
            await fetchData();
            toast.success(t('enrollSuccess'));
        } catch (err) {
            handleError(err);
        }
    };

    const leaveActivity = async (activityID: number) => {
        try {
            await authenticatedInstance.delete(`/activities/${activityID}/leave`);
            await fetchData();
            toast.success(t('leaveSuccess'));
        } catch (err) {
            handleError(err);
        }
    };

    const columns = [
        {
            key: 'name',
            label: t('activityTableColumns.name'),
        },
        {
            key: 'dayOfWeek',
            label: t('activityTableColumns.dayOfWeek'),
        },
        {
            key: 'startTime',
            label: t('activityTableColumns.startTime'),
        },
        {
            key: 'durationMin',
            label: t('activityTableColumns.duration'),
        },
        {
            key: 'roomName',
            label: t('activityTableColumns.room'),
        },
        {
            key: 'trainer',
            label: t('activityTableColumns.trainer'),
        },
        {
            key: 'enrolled',
            label: t('activityTableColumns.action'),
            render: (enrolled: boolean, row: CustomerActivity) => {
                return (
                    <Button
                        color={enrolled ? 'danger' : 'success'}
                        onPress={async () =>
                            enrolled ? leaveActivity(row.id) : enrollForActivity(row.id)
                        }
                        fullWidth
                    >
                        {enrolled ? t('leave') : t('enroll')}
                    </Button>
                );
            },
        },
    ];

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-3/4">
                <CustomTable<CustomerActivity>
                    columns={columns}
                    data={data}
                    onPageChange={(page) => {
                        setSearchParams((prevState) => ({ ...prevState, pageNumber: page }));
                    }}
                    onSearch={(search) => {
                        setSearchParams((prevState) => ({
                            ...prevState,
                            name: search,
                            pageNumber: 1,
                        }));
                    }}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
};

export default CustomerDashboard;
