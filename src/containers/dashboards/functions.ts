import { toast } from 'react-toastify';

import axios from '@/api.ts';
import { ActivitiesResponse } from '@/interfaces.ts';

export const fetchActivities = (
    token: string,
    setActivitiesResponse: (data: ActivitiesResponse) => void,
    pageNumber = 0,
    pageSize = 5
) => {
    const res = axios.get<ActivitiesResponse>('/member/activities', {
        headers: {
            Authorization: `Bearer ${token}`,
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
