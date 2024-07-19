import { useState } from 'react';

import { SearchParams } from '@/hooks/useSearchParams/types.ts';

const useSearchParams = (searchParams: SearchParams) => {
    const [params, setParams] = useState<SearchParams>(searchParams);

    return { params, setParams };
};

export default useSearchParams;
