import { useCallback, useEffect, useState } from 'react';

import axios from '@/axios';
import { handleError } from '@/axios/functions.ts';
import { SearchParams } from '@/hooks/types.ts';

const useFetch = <T>(
    url: string,
    searchParams: SearchParams | undefined = undefined
) => {
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get<T>(url, {
                params: searchParams,
            });
            setData(data);
        } catch (err) {
            handleError(err);
        } finally {
            setIsLoading(false);
        }
    }, [searchParams]);

    useEffect(() => {
        fetchData().then();
    }, [fetchData]);

    return { data, isLoading };
};

export default useFetch;
