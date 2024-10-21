import { useEffect, useState } from 'react';

import {
    Button,
    Input,
    Selection,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    getKeyValue,
} from '@nextui-org/react';
import { FaSearch } from 'react-icons/fa';
import { ImFilesEmpty } from 'react-icons/im';

import { useTranslation } from 'react-i18next';
import { useDebounce } from '@uidotdev/usehooks';

import { Page, Pagination } from '@/types';
import CustomPagination from '@components/CustomPagination';
import LoadingSpinner from '@components/LoadingSpinner';

import useFetch from '@hooks/useFetch';
import useSearchParams from '@hooks/useSearchParams';

import { CustomTableProps, IdentifiedItem } from './types';

const CustomTable = <T,>({ columns, url, actionButtons }: CustomTableProps) => {
    const [selectedKey, setSelectedKey] = useState<Selection>(new Set());
    const [name, setName] = useState('');

    const { t } = useTranslation();
    const debouncedName = useDebounce(name, 300);

    const { searchParams, setSearchParams } = useSearchParams({
        pageNumber: 1,
        pageSize: 5,
        name: '',
    });
    const { data, isLoading } = useFetch<Page<IdentifiedItem<T>>>(url, searchParams);

    useEffect(() => {
        setSearchParams((prevState) => ({ ...prevState, name: debouncedName }));
    }, [debouncedName]);

    const buttonDisabled = selectedKey instanceof Set && selectedKey.size === 0;

    let pagination: Pagination | undefined;
    if (data) {
        pagination = {
            offset: data.pageable.offset,
            numberOfElements: data.numberOfElements,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            onChange: (page: number) =>
                setSearchParams((prevState) => ({
                    ...prevState,
                    pageNumber: page,
                })),
        };
    }

    return (
        <div className="flex flex-col gap-y-5">
            <div className="flex justify-end gap-x-3">
                {actionButtons?.map(({ children, alwaysEnabled, ...rest }, idx) => (
                    <Button key={idx} {...rest} isDisabled={!alwaysEnabled && buttonDisabled}>
                        {children}
                    </Button>
                ))}
            </div>
            <Input startContent={<FaSearch />} placeholder={t('name')} onChange={(e) => setName(e.target.value)} />
            <Table
                aria-label="Custom table"
                selectionMode="single"
                selectedKeys={selectedKey}
                onSelectionChange={setSelectedKey}
                layout="fixed"
                isStriped
            >
                <TableHeader columns={columns}>
                    {({ key, label }) => <TableColumn key={key}>{label}</TableColumn>}
                </TableHeader>
                <TableBody
                    items={data?.content ?? []}
                    emptyContent={
                        <div className="flex items-center justify-center gap-x-3">
                            {t('noData')} <ImFilesEmpty size="20px" />
                        </div>
                    }
                    loadingContent={<LoadingSpinner />}
                    isLoading={isLoading}
                >
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {pagination && <CustomPagination {...pagination} />}
        </div>
    );
};

export default CustomTable;
