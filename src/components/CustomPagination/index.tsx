import { useTranslation } from 'react-i18next';
import { Pagination } from '@nextui-org/react';

type CustomPaginationProps = {
    pageNumber: number;
    offset: number;
    numberOfElements: number;
    totalElements: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const CustomPagination = ({
    pageNumber,
    offset,
    numberOfElements,
    totalElements,
    totalPages,
    onPageChange,
}: CustomPaginationProps) => {
    const { t } = useTranslation();

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex items-center justify-between">
            <div>
                {offset + 1} - {offset + numberOfElements} {t('pagination.of')} {totalElements}{' '}
                {t('pagination.items')}
            </div>
            <Pagination
                page={pageNumber + 1}
                total={totalPages}
                onChange={onPageChange}
                showControls
                loop
                disableAnimation={false}
            />
        </div>
    );
};

export default CustomPagination;
