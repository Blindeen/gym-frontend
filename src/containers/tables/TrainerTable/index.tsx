import { useContext, useState } from 'react';

import { toast } from 'react-toastify';

import Table from '@/components/Table';
import Button from '@/components/Button';

import { AuthContext } from '@/AuthContext.tsx';
import axios from '@/api.ts';
import { ActivitiesResponse } from '@/interfaces.ts';
import Modal from 'react-modal';
import ActivityForm from '@/containers/ActivityForm';

interface TrainerTableProps {
    data: ActivitiesResponse;
    fetchActivities: () => void;
    onPageChange: (pageNumber: number) => void;
}

const TrainerTable = ({
    data,
    fetchActivities,
    onPageChange,
}: TrainerTableProps) => {
    const { state } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(
        {} as Record<string, never>
    );

    const deleteActivity = (id: number) => {
        const res = axios.delete(`/activity/${id}/delete`, {
            headers: {
                Authorization: `Bearer ${state.token}`,
            },
        });
        res.then(() => {
            toast('Activity deleted', {
                type: 'success',
            });
            fetchActivities();
        }).catch(() => {
            toast('Cannot delete activity', {
                type: 'error',
            });
        });
    };

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
                    <Button
                        size="full"
                        onClick={() => {
                            setIsOpen(true);
                            setSelectedActivity(record);
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        buttonType="danger"
                        size="full"
                        onClick={() => deleteActivity(record['id'])}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                data={data.content}
                pagination={{ ...data, onPageChange }}
            />
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <div className="flex w-full h-full justify-center items-center">
                    <ActivityForm
                        fetchActivities={() => fetchActivities()}
                        defaultValues={selectedActivity}
                    />
                </div>
            </Modal>
        </>
    );
};

export default TrainerTable;
