import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
    Button,
    Selection,
} from '@nextui-org/react';
import { ImFilesEmpty } from 'react-icons/im';

import CustomPagination from '@components/CustomPagination';
import { CustomTableProps } from './types';

const CustomTable = <T,>({ columns, rows, actionButtons, pagination }: CustomTableProps<T>) => {
    const [selectedKey, setSelectedKey] = useState<Selection>(new Set());

    const { t } = useTranslation();

    const buttonDisabled = selectedKey instanceof Set && selectedKey.size === 0;

    return (
        <div className="flex flex-col gap-y-5">
            <div className="flex justify-end gap-x-3">
                {actionButtons?.map(({ children, alwaysEnabled, ...rest }, idx) => (
                    <Button key={idx} {...rest} isDisabled={!alwaysEnabled && buttonDisabled}>
                        {children}
                    </Button>
                ))}
            </div>
            <Table
                aria-label="Custom table"
                selectionMode="single"
                selectedKeys={selectedKey}
                onSelectionChange={(key) => setSelectedKey(key)}
                isStriped
            >
                <TableHeader columns={columns}>
                    {({ key, label }) => <TableColumn key={key}>{label}</TableColumn>}
                </TableHeader>
                <TableBody
                    items={rows}
                    emptyContent={
                        <div className="flex items-center justify-center gap-x-3">
                            {t('noData')} <ImFilesEmpty size="20px" />
                        </div>
                    }
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
