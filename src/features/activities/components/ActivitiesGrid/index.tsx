import CustomCard from '@components/CustomCard';
import CustomPagination from '@components/CustomPagination';
import LoadingSpinner from '@components/LoadingSpinner';

import useFetch from '@hooks/useFetch';
import useSearchParams from '@hooks/useSearchParams';

import { ActivitiesProps, ActivitiesPage } from './types';

const ActivitiesGrid = ({ url }: ActivitiesProps) => {
    const { searchParams, setSearchParams } = useSearchParams({
        pageNumber: 1,
        pageSize: 8,
    });
    const { data, isLoading } = useFetch<ActivitiesPage>(url, searchParams, false);

    const handlePageChange = (page: number) => {
        setSearchParams((prevState) => ({
            ...prevState,
            pageNumber: page,
        }));
    };

    return (
        <>
            <div className="flex h-[685px] justify-center md:h-[725px] lg:h-[450px]">
                {isLoading && (
                    <div className="self-center">
                        <LoadingSpinner />
                    </div>
                )}
                {!isLoading && data && (
                    <div className="grid h-[660px] w-full grid-cols-2 grid-rows-4 gap-4 md:h-[700px] md:w-7/12 lg:h-[425px] lg:w-[850px] lg:grid-cols-4 lg:grid-rows-2">
                        {data.content.map(({ id, name, startTime, dayOfWeek: { label } }, idx) => (
                            <CustomCard
                                key={`${id}-${idx}`}
                                title={name}
                                subtitle={label}
                                description={startTime}
                            />
                        ))}
                    </div>
                )}
            </div>
            {data && (
                <CustomPagination
                    pageNumber={data.pageable.pageNumber}
                    offset={data.pageable.offset}
                    numberOfElements={data.numberOfElements}
                    totalElements={data.totalElements}
                    totalPages={data.totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </>
    );
};

export default ActivitiesGrid;
