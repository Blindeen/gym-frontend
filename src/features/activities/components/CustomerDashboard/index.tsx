import { useTranslation } from 'react-i18next';

import CustomTable from '@components/CustomTable';

import useSearchParams from '@hooks/useSearchParams';
import useFetch from '@hooks/useFetch';

import { Page } from '@/types';
import { CustomerActivity } from './types';
import EnrollLeaveButton from '../EnrollLeaveButton';

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
            render: (enrolled: boolean, row: CustomerActivity) => (
                <EnrollLeaveButton enrolled={enrolled} row={row} onSuccessfulRequest={fetchData} />
            ),
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
