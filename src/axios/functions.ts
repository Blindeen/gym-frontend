import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import i18n from 'i18next';

import { ResponseError } from '@/axios/types.ts';
import { log } from '@/logs.ts';

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
            log('error', err.message);
            toast.error(err.message);
        } else {
            const message = i18n.t('unexpectedError');
            log('error', message);
            toast.error(message);
        }
    }
};
