import { useState, useCallback } from 'react';

import axiosClient from '@/api';
import { handleError } from '@/api/functions';
import { RawAxiosRequestHeaders } from 'axios';

const useRequest = <T = never, K = never>(
    url: string,
    method: 'POST' | 'PUT' | 'DELETE' = 'POST',
    headers?: RawAxiosRequestHeaders,
    onSuccess?: (data: K) => void
) => {
    const [loadingRequest, setLoadingRequest] = useState(false);

    const sendRequest = useCallback(async (requestData?: T) => {
        setLoadingRequest(true);
        try {
            const { data: responseData } = await axiosClient<K>({
                url,
                method,
                data: requestData,
                headers,
            });

            onSuccess && onSuccess(responseData);
        } catch (err) {
            handleError(err);
        } finally {
            setLoadingRequest(false);
        }
    }, [url, method, headers, onSuccess]);

    return { sendRequest, loadingRequest };
};

export default useRequest;
