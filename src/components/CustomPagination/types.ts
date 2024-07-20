export type CustomPaginationProps = {
    offset: number;
    numberOfElements: number;
    totalElements: number;
    totalPages: number;
    onChange: (page: number) => void;
};
