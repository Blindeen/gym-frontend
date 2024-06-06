import { useContext, useEffect, useState } from 'react';

import CustomerTable from '@/containers/tables/CustomerTable';
import { fetchActivities } from '@/containers/dashboards/functions.ts';

import { AuthContext } from '@/AuthContext.tsx';
import { ActivitiesResponse } from '@/interfaces.ts';

const CustomerDashboard = () => {
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
        <>
            <div className="flex flex-col items-center gap-4 pb-3 sm:w-[95%] lg:w-[60%]">
                <div className="w-full">
                    <h3 className="h3-primary mt-0">Activities</h3>
                    <CustomerTable
                        data={activitiesResponse}
                        fetchActivities={() =>
                            fetchActivities(state.token, setActivitiesResponse)
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default CustomerDashboard;
