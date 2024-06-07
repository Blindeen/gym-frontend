import { Column } from '@/interfaces.ts';

export const commonColumns: Column[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Day of week',
        dataIndex: 'dayOfWeek',
        key: 'dayOfWeek',
    },
    {
        title: 'Start time',
        dataIndex: 'startTime',
        key: 'startTime',
    },
    {
        title: 'End time',
        dataIndex: 'endTime',
        key: 'endTime',
    },
    {
        title: 'Room',
        dataIndex: 'room',
        key: 'room',
    },
];
