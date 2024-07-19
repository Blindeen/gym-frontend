import { Pagination } from '@nextui-org/react';

import CustomCard from '@/components/CustomCard';

import useFetch from '@/hooks/useFetch';
import useSearchParams from '@/hooks/useSearchParams';

import {
    ActivitiesProps,
    ActivitiesPage,
} from '@/components/Activities/types.ts';

const Activities = ({ url }: ActivitiesProps) => {
    const { searchParams, setSearchParams } = useSearchParams({
        pageNumber: 1,
        pageSize: 5,
    });
    const { data } = useFetch<ActivitiesPage>(url, searchParams);

    return (
        <>
            <div className="grid grid-cols-4">
                {data?.content.map(
                    ({ id, name, startTime, dayOfWeek }, idx) => (
                        <CustomCard
                            key={`${id}-${idx}`}
                            title={name}
                            description={`${dayOfWeek} ${startTime}`}
                        />
                    )
                )}
            </div>
            {data && data.totalPages > 1 && (
                <Pagination
                    className="mt-2"
                    total={data.totalPages}
                    onChange={(page) =>
                        setSearchParams({
                            ...searchParams,
                            pageNumber: page,
                        })
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
