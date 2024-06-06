import { useContext, useEffect, useState } from 'react';

import Button from '@/components/Button';
import Table from '@/components/Table';

import { AuthContext } from '@/AuthContext.tsx';
import { ActivitiesResponse, Column } from '@/interfaces.ts';

import { fetchActivities } from '@/containers/dashboards/functions.ts';

const columns: Column[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Day of week',
        dataIndex: 'dayOfWeek',
        key: 'dayOfWeek',
    },
    {
        title: 'Start time',
        dataIndex: 'startTime',
        key: 'startTime',
    },
    {
        title: 'End time',
        dataIndex: 'endTime',
        key: 'endTime',
    },
    {
        title: 'Room',
        dataIndex: 'room',
        key: 'room',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: () => (
            <div className="flex gap-2">
                <Button>Unsubscribe</Button>
            </div>
        ),
    },
];

const CustomerTable = () => {
    const { state } = useContext(AuthContext);
    const [activitiesResponse, setActivitiesResponse] =
        useState<ActivitiesResponse>({
            content: [],
            pageable: {
                pageNumber: 0,
                pageSize: 0,
            },
            totalPages: 0,
            totalElements: 0,
        });

    useEffect(() => {
        fetchActivities(state.token, setActivitiesResponse);
    }, [state.token]);

    return (
        <div className="sm:w-[90%] md:w-[70%] lg:w-[60%]">
            <Table
                columns={columns}
                data={activitiesResponse.content}
                pagination={{ ...activitiesResponse }}
            />
        </div>
    );
};

export default CustomerTable;
