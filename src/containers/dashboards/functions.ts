import { toast } from 'react-toastify';

import axios from '@/api.ts';
import { ActivitiesResponse } from '@/interfaces.ts';

export const fetchActivities = (
    token: string,
    setActivitiesResponse: (data: ActivitiesResponse) => void
) => {
    const res = axios.get<ActivitiesResponse>('/member/activities', {
        headers: {
            Authorization: `Bearer ${token}`,
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
