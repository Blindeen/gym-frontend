import { useContext } from 'react';

import Button from '@/components/Button';
import Table from '@/components/Table';

import { AuthContext } from '@/AuthContext.tsx';
import { ActivitiesResponse, Column } from '@/interfaces.ts';

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

interface CustomerTableProps {
    data: ActivitiesResponse;
    fetchActivities: () => void;
}

const CustomerTable = ({ data, fetchActivities }: CustomerTableProps) => {
    const { state } = useContext(AuthContext);

    return (
        <div className="sm:w-[90%] md:w-[70%] lg:w-[60%]">
            <Table
                columns={columns}
                data={data.content}
                pagination={{ ...data }}
            />
        </div>
    );
};

export default CustomerTable;
