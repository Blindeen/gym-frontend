import { useContext, useEffect, useState } from 'react';

import EnrollActivityForm from '@/containers/EnrollActivityForm';

import Table from '@/components/Table';
import Button from '@/components/Button';

import { AuthContext } from '@/AuthContext.tsx';
import {
    ActivitiesResponse,
    Column,
    type ErrorResponse,
} from '@/interfaces.ts';
import ActivityForm from '@/containers/ActivityForm';
import axios from '@/api.ts';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

const Dashboard = () => {
    const { state } = useContext(AuthContext);
    const { user } = state;
    const [activitiesResponse, setActivitiesResponse] =
        useState<ActivitiesResponse>({
            content: [],
            pageable: {
                pageNumber: 0,
                pageSize: 5,
            },
            totalPages: 0,
            totalElements: 0,
        });
    const [isOpen, setIsOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(
        {} as Record<string, never>
    );

    const fetchActivities = (pageNumber = 0, pageSize = 5) => {
        const res = axios.get<ActivitiesResponse>('/member/activities', {
            headers: {
                Authorization: `Bearer ${state.token}`,
            },
            params: {
                pageNumber,
                pageSize,
            },
        });
        res.then((res) => {
            const { data } = res;
            setActivitiesResponse(data);
        }).catch(() => {
            toast('Cannot fetch activities', {
                type: 'error',
            });
        });
    };

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

    useEffect(() => {
        fetchActivities();
    }, [state.token]);

    const onPageChange = (pageNumber: number) => {
        fetchActivities(pageNumber);
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
        user.role === 'CUSTOMER'
            ? {
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
              }
            : {
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
        <div className="flex flex-col items-center gap-4 pb-3 sm:w-[95%] lg:w-[60%]">
            <div className="w-full">
                <h3 className="h3-primary mt-0">Activities</h3>
                <Table
                    columns={columns}
                    data={activitiesResponse.content}
                    pagination={{ ...activitiesResponse, onPageChange }}
                />
            </div>
            <div className="sm:w-[95%] lg:w-[40%]">
                {user.role === 'CUSTOMER' ? (
                    <EnrollActivityForm
                        myActivities={activitiesResponse}
                        fetchMyActivities={() => fetchActivities()}
                    />
                ) : user.role === 'TRAINER' ? (
                    <ActivityForm fetchActivities={() => fetchActivities()} />
                ) : (
                    <></>
                )}
            </div>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <div className="flex w-full h-full justify-center items-center">
                    <ActivityForm
                        fetchActivities={() => fetchActivities()}
                        defaultValues={selectedActivity}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default Dashboard;
