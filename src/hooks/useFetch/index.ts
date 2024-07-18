import { useCallback, useEffect, useState } from 'react';

import axios from '@/axios';
import { handleError } from '@/axios/functions.ts';

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T>();

    const fetchData = useCallback(async () => {
        try {
            const { data } = await axios.get<T>(url);
            setData(data);
        } catch (err) {
            handleError(err);
        }
    }, [url]);

    useEffect(() => {
        fetchData().then();
    }, [fetchData]);

    return { data };
};

export default useFetch;
