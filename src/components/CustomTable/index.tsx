import { useEffect, useMemo, useState } from 'react';

import {
    Button,
    Input,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from '@nextui-org/react';
import { FaSearch } from 'react-icons/fa';
import { ImFilesEmpty } from 'react-icons/im';

import { useTranslation } from 'react-i18next';
import { useDebounce } from '@uidotdev/usehooks';

import CustomPagination from '@components/CustomPagination';
import LoadingSpinner from '@components/LoadingSpinner';

import { getNestedKeyValue } from './helpers';
import { CustomTableProps } from './types';

const CustomTable = <T,>({
    columns,
    data,
    actionButtons,
    selectedKey,
    onRowSelection,
    onPageChange,
    onSearch,
    isLoading,
}: CustomTableProps<T>) => {
    const [name, setName] = useState('');

    const debouncedName = useDebounce(name, 300);
    const { t } = useTranslation();

    useEffect(() => onSearch?.(debouncedName), [debouncedName]);

    const buttonDisabled = selectedKey === undefined;

    const pagination = useMemo(() => {
        if (data) {
            const {
                pageable: { pageNumber, offset },
                numberOfElements,
                totalElements,
                totalPages,
            } = data;
            return {
                pageNumber,
                offset,
                numberOfElements,
                totalElements,
                totalPages,
                onPageChange,
            };
        }

        return undefined;
    }, [data]);

    return (
        <div className="flex flex-col gap-y-5">
            <div className="flex justify-end gap-x-3">
                {actionButtons?.map(({ children, alwaysEnabled, ...rest }, idx) => (
                    <Button key={idx} {...rest} isDisabled={!alwaysEnabled && buttonDisabled}>
                        {children}
                    </Button>
                ))}
            </div>
            {onSearch && (
                <Input
                    startContent={<FaSearch />}
                    placeholder={t('name')}
                    onChange={(e) => setName(e.target.value)}
                />
            )}
            <Table
                aria-label="Custom table"
                selectionMode="single"
                selectedKeys={new Set(selectedKey ? [selectedKey] : [])}
                onSelectionChange={(keys) => {
                    if (keys instanceof Set) {
                        onRowSelection?.(keys.values().next().value);
                    }
                }}
                layout="fixed"
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
                            {(columnKey) => (
                                <TableCell>{getNestedKeyValue(item, columnKey)}</TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {pagination && <CustomPagination {...pagination} />}
        </div>
    );
};

export default CustomTable;
