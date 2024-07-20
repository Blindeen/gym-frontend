import { useTranslation } from 'react-i18next';
import { Pagination } from '@nextui-org/react';

import { CustomPaginationProps } from '@/components/CustomPagination/types.ts';

const CustomPagination = ({
    offset,
    numberOfElements,
    totalElements,
    totalPages,
    onChange,
}: CustomPaginationProps) => {
    const { t } = useTranslation();

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex items-center justify-between">
            <div>
                {offset + 1} - {offset + numberOfElements} {t('pagination.of')}{' '}
                {totalElements} {t('pagination.items')}
            </div>
            <Pagination
                total={totalPages}
                onChange={onChange}
                showControls
                loop
                disableAnimation={false}
            />
        </div>
    );
};

export default CustomPagination;
