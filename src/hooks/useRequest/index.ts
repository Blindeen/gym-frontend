import { useState, useCallback } from 'react';

import { unauthenticatedInstance, authenticatedInstance } from '@/api';
import { handleError } from '@/api/functions';
import { RawAxiosRequestHeaders } from 'axios';

const useRequest = <T = never, K = never>(
    url: string,
    method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'POST',
    requiresAuth: boolean = true,
    headers?: RawAxiosRequestHeaders,
    onSuccess?: (data: K) => void
) => {
    const [loadingRequest, setLoadingRequest] = useState(false);

    const sendRequest = useCallback(
        async (requestData?: T) => {
            setLoadingRequest(true);
            const axios = requiresAuth ? authenticatedInstance : unauthenticatedInstance;
            try {
                const { data: responseData } = await axios<K>({
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
        },
        [url, method, headers, onSuccess]
    );

    return { sendRequest, loadingRequest };
};

export default useRequest;
