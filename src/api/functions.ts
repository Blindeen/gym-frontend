import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import i18n from 'i18next';

import { log } from '@/utils';

type ResponseError = {
    errors: Record<string, string[]>;
};

export const handleError = (err: unknown) => {
    if (axios.isAxiosError(err)) {
        const { response, request, message } = err as AxiosError<ResponseError>;
        if (response) {
            const {
                data: { errors },
            } = response;
            Object.entries(errors).forEach(([, info]) => info.forEach((desc) => toast.error(desc)));
        } else if (request) {
            log('error', message);
            toast.error(message);
        } else {
            const message = i18n.t('unexpectedError');
            log('error', message);
            toast.error(message);
        }
    }
};
