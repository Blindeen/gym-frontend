import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';

import { ResponseError } from '@/axios/types.ts';

export const handleError = (err: any) => {
    if (axios.isAxiosError(err)) {
        const { response } = err as AxiosError<ResponseError>;
        if (response) {
            const {
                data: { errors },
            } = response;
            Object.entries(errors).forEach(([_, info]) =>
                info.forEach((desc) => toast.error(desc))
            );
        }
    } else {
        toast.error('An unexpected error occurred');
    }
};
