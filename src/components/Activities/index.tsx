import CustomCard from '@/components/CustomCard';

import useFetch from '@/hooks/useFetch';
import {
    ActivitiesProps,
    ActivitiesPage,
} from '@/components/Activities/types.ts';
import { Pagination } from '@nextui-org/react';
import { useState } from 'react';

const Activities = ({ url }: ActivitiesProps) => {
    const [fetchUrl, setFetchUrl] = useState(`${url}?pageNumber=0&pageSize=4`);
    const { data } = useFetch<ActivitiesPage>(fetchUrl);

    return (
        <>
            <div className="grid grid-cols-4 justify-between">
                {data?.content.map(({ id, name, startTime, dayOfWeek }) => (
                    <CustomCard
                        key={id}
                        title={name}
                        description={`${dayOfWeek} ${startTime}`}
                    />
                ))}
            </div>
            {data && data.totalPages > 1 && (
                <Pagination
                    className="mt-2"
                    total={data?.totalPages}
                    initialPage={1}
                    onChange={(page) =>
                        setFetchUrl(`${url}?pageNumber=${page - 1}&pageSize=4`)
                    }
                    showControls
                    loop
                    disableAnimation={false}
                />
            )}
        </>
    );
};

export default Activities;
