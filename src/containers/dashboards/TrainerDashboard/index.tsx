import { useContext, useEffect, useState } from 'react';

import TrainerTable from '@/containers/tables/TrainerTable';
import ActivityForm from '@/containers/ActivityForm';

import { ActivitiesResponse } from '@/interfaces.ts';

import { fetchActivities } from '@/containers/dashboards/functions.ts';
import { AuthContext } from '@/AuthContext.tsx';

const TrainerDashboard = () => {
    const { state } = useContext(AuthContext);
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

    useEffect(() => {
        fetchActivities(state.token, setActivitiesResponse);
    }, [state.token]);

    return (
        <>
            <div className="flex flex-col items-center gap-4 pb-3 sm:w-[95%] lg:w-[60%]">
                <div className="w-full">
                    <h3 className="h3-primary mt-0">Activities</h3>
                    <TrainerTable
                        data={activitiesResponse}
                        fetchActivities={() =>
                            fetchActivities(state.token, setActivitiesResponse)
                        }
                    />
                </div>
                <div className="flex flex-col w-full">
                    <h3 className="h3-primary mt-0">Add activity</h3>
                    <ActivityForm
                        fetchActivities={() =>
                            fetchActivities(state.token, setActivitiesResponse)
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default TrainerDashboard;
