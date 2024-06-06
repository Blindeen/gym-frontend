import { useContext } from 'react';

import { toast } from 'react-toastify';

import Button from '@/components/Button';
import Table from '@/components/Table';

import { AuthContext } from '@/AuthContext.tsx';
import {
    ActivitiesResponse,
    Column,
    type ErrorResponse,
} from '@/interfaces.ts';
import axios from '@/api.ts';

interface CustomerTableProps {
    data: ActivitiesResponse;
    fetchActivities: () => void;
    onPageChange: (pageNumber: number) => void;
}

const CustomerTable = ({
    data,
    fetchActivities,
    onPageChange,
}: CustomerTableProps) => {
    const { state } = useContext(AuthContext);

    const leaveActivity = (id: number) => {
        const res = axios.delete(`/activity/${id}/leave`, {
            headers: {
                Authorization: `Bearer ${state.token}`,
            },
        });

        res.then(() => {
            toast('You have left the activity', {
                type: 'success',
            });
            fetchActivities();
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
            render: (record) => (
                <div className="flex gap-2">
                    <Button
                        size={20}
                        onClick={() => leaveActivity(record['id'])}
                    >
                        Unsubscribe
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <Table
            columns={columns}
            data={data.content}
            pagination={{ ...data, onPageChange }}
        />
    );
};

export default CustomerTable;
