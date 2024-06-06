import { useContext, useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import Table from '@/components/Table';
import Button from '@/components/Button';

import { AuthContext } from '@/AuthContext.tsx';
import { ActivitiesResponse } from '@/interfaces.ts';
import axios from '@/api.ts';

import { fetchActivities } from '@/containers/tables/functions.ts';

const TrainerTable = () => {
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

    const deleteActivity = async (id: number) => {
        const res = axios.delete(`/activity/${id}/delete`, {
            headers: {
                Authorization: `Bearer ${state.token}`,
            },
        });
        res.then(async () => {
            toast('Activity deleted', {
                type: 'success',
            });
            await fetchActivities(state.token, setActivitiesResponse);
        }).catch(() => {
            toast('Cannot delete activity', {
                type: 'error',
            });
        });
    };

    useEffect(() => {
        fetchActivities(state.token, setActivitiesResponse).then();
    }, [state.token]);

    const columns = [
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
            render: (record: Record<string, never>) => (
                <div className="flex gap-2">
                    <Button>Edit</Button>
                    <Button
                        buttonType="danger"
                        onClick={() => deleteActivity(record['id'])}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <Table
            columns={columns}
            data={activitiesResponse.content}
            pagination={{ ...activitiesResponse }}
        />
    );
};

export default TrainerTable;
