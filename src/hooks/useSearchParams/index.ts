import { useState } from 'react';

import { SearchParams } from '@hooks/types.ts';

const useSearchParams = (params: SearchParams) => {
    const [searchParams, setSearchParams] = useState<SearchParams>(params);

    return { searchParams, setSearchParams };
};

export default useSearchParams;
