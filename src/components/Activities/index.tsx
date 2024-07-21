import CustomCard from '@/components/CustomCard';
import CustomPagination from '@/components/CustomPagination';
import LoadingSpinner from '@/components/LoadingSpinner';

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
    const { data, isLoading } = useFetch<ActivitiesPage>(url, searchParams);

    const handlePageChange = (page: number) => {
        setSearchParams((prevState) => ({
            ...prevState,
            pageNumber: page,
        }));
    };

    return (
        <>
            {isLoading && <LoadingSpinner />}
            {!isLoading && data && (
                <div className="mb-4 grid grid-cols-4">
                    {data.content.map(
                        ({ id, name, startTime, dayOfWeek }, idx) => (
                            <CustomCard
                                key={`${id}-${idx}`}
                                title={name}
                                description={`${dayOfWeek} ${startTime}`}
                            />
                        )
                    )}
                </div>
            )}
            {data && (
                <CustomPagination
                    offset={data.pageable.offset}
                    numberOfElements={data.numberOfElements}
                    totalElements={data.totalElements}
                    totalPages={data.totalPages}
                    onChange={handlePageChange}
                />
            )}
        </>
    );
};

export default Activities;
