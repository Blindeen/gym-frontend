import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Column, Pagination } from '@/interfaces.ts';

interface TableProps {
    columns: Column[];
    data: Record<string, never>[];
    pagination?: Pagination;
}

const Table = ({ columns, data, pagination }: TableProps) => {
    const tableHeaders = columns.map((column) => (
        <th
            className="min-w-[90px] border-r-[1px] border-solid border-gray-300 p-2"
            key={column.key}
        >
            {column.title}
        </th>
    ));

    const tableRows = data.map((row, index) => (
        <tr key={index} className="hover:bg-gray-100">
            {columns.map((column) => (
                <td
                    className="border-b-[1px] border-b-solid border-b-gray-300 p-2"
                    key={column.key}
                >
                    {row[column.dataIndex] ?? column.render?.()}
                </td>
            ))}
        </tr>
    ));

    const noDataElement = (
        <tr>
            <td
                className="h-[50px] text-center border-b-[1px] border-solid border-gray-300"
                colSpan={columns.length}
            >
                No data available
            </td>
        </tr>
    );

    return (
        <div className="flex flex-col gap-5 justify-center w-full overflow-x-auto">
            <table className="border-collapse border-spacing-0 w-full">
                <thead className="bg-blue-500 text-white">
                    <tr className="h-[50px]">{tableHeaders}</tr>
                </thead>
                <tbody>{data.length > 0 ? tableRows : noDataElement}</tbody>
            </table>
            {pagination && (
                <div className="flex justify-center items-center gap-5 text-lg">
                    <MdKeyboardArrowLeft size={30} />
                    {pagination.pageable.pageNumber + 1}
                    {' of '}
                    {pagination.totalPages}
                    <MdKeyboardArrowRight size={30} />
                </div>
            )}
        </div>
    );
};

export default Table;
