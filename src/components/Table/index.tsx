import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Column {
    title: string;
    dataIndex: string;
    key: string;
}

interface TableProps {
    columns: Column[];
    data: Record<string, never>[];
    pagination?: boolean;
}

const Table = ({ columns, data, pagination = false }: TableProps) => {
    const tableHeaders = columns.map((column) => (
        <th
            className="min-w-[90px] border-[1px] border-solid border-gray-300 p-2 text-center"
            key={column.key}
        >
            {column.title}
        </th>
    ));

    const tableRows = data.map((row, index) => (
        <tr key={index}>
            {columns.map((column) => (
                <td key={column.key}>{row[column.dataIndex]}</td>
            ))}
        </tr>
    ));

    const noDataElement = (
        <tr>
            <td className={`h-[50px] text-center`} colSpan={columns.length}>
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
                <div className="flex justify-center items-center gap-5">
                    <FaArrowLeft />
                    {1}
                    <FaArrowRight />
                </div>
            )}
        </div>
    );
};

export default Table;
