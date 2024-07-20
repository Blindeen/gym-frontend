import CustomCard from '@/components/CustomCard';
import CustomPagination from '@/components/CustomPagination';

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

    if (data === undefined) {
        return null;
    }

    const {
        content,
        pageable: { offset },
        numberOfElements,
        totalElements,
        totalPages,
    } = data;

    return (
        <>
            <div className="mb-4 grid grid-cols-4">
                {content.map(({ id, name, startTime, dayOfWeek }, idx) => (
                    <CustomCard
                        key={`${id}-${idx}`}
                        title={name}
                        description={`${dayOfWeek} ${startTime}`}
                    />
                ))}
            </div>
            <CustomPagination
                offset={offset}
                numberOfElements={numberOfElements}
                totalElements={totalElements}
                totalPages={totalPages}
                onChange={(page) =>
                    setSearchParams({
                        ...searchParams,
                        pageNumber: page,
                    })
                }
            />
        </>
    );
};

export default Activities;
