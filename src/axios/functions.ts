import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import i18n from 'i18next';

import { ResponseError } from '@/axios/types.ts';
import { error } from '@/logs.ts';

export const handleError = (err: any) => {
    if (axios.isAxiosError(err)) {
        const { response, request } = err as AxiosError<ResponseError>;
        if (response) {
            const {
                data: { errors },
            } = response;
            Object.entries(errors).forEach(([_, info]) =>
                info.forEach((desc) => toast.error(desc))
            );
        } else if (request) {
            toast.error(err.message);
        } else {
            error(i18n.t('unexpectedError'));
        }
    }
};
