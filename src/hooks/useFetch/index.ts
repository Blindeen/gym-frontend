import { useCallback, useEffect, useState } from 'react';

import { unauthenticatedInstance, authenticatedInstance } from '@/api';
import { handleError } from '@/api/functions';
import { SearchParams } from '@/hooks/types.ts';

const useFetch = <T>(
    url: string,
    searchParams?: SearchParams,
    requiresAuth: boolean = true,
    onSuccess?: (data: T) => void
) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<unknown>();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        const axios = requiresAuth ? authenticatedInstance : unauthenticatedInstance;
        try {
            const { data } = await axios.get<T>(url, {
                params: searchParams,
            });
            setData(data);
            onSuccess && onSuccess(data);
        } catch (err) {
            setError(err);
            handleError(err);
        } finally {
            setIsLoading(false);
        }
    }, [searchParams]);

    useEffect(() => {
        fetchData().then();
    }, [fetchData]);

    return { data, error, fetchData, isLoading };
};

export default useFetch;
