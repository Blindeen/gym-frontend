import { useCallback, useEffect, useState } from 'react';

import axios from '@/api';
import { handleError } from '@/api/functions';
import { SearchParams } from '@/hooks/types.ts';

const useFetch = <T>(
    url: string,
    searchParams: SearchParams | undefined = undefined,
    onSuccess?: (data: T) => void
) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<unknown>();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
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

    return { data, error, isLoading };
};

export default useFetch;
