import { useTranslation } from 'react-i18next';
import { FaPlus, FaPen, FaTrash } from 'react-icons/fa6';

import { Activity } from '@containers/types';
import CustomTable from '@components/CustomTable';
import { ActionButton } from '@components/CustomTable/types';

const rows = [
    {
        id: 1,
        name: 'Football',
        dayOfWeek: 'Monday',
        startTime: '08:30',
        durationMin: 60,
        room: 'A5',
        trainer: 'Jakub Szmajda',
    },
    {
        id: 2,
        name: 'Basketball',
        dayOfWeek: 'Tuesday',
        startTime: '10:20',
        durationMin: 60,
        room: 'A5',
        trainer: 'Jakub Szmajda',
    },
    {
        id: 3,
        name: 'Voleyball',
        dayOfWeek: 'Wednesday',
        startTime: '07:15',
        durationMin: 60,
        room: 'A5',
        trainer: 'Jakub Szmajda',
    },
    {
        id: 4,
        name: 'Tennis',
        dayOfWeek: 'Friday',
        startTime: '15:25',
        durationMin: 60,
        room: 'A5',
        trainer: 'Jakub Szmajda',
    },
];

const columns = [
    {
        key: 'name',
        label: 'NAME',
    },
    {
        key: 'dayOfWeek',
        label: 'DAY OF WEEK',
    },
    {
        key: 'startTime',
        label: 'START TIME',
    },
    {
        key: 'durationMin',
        label: 'DURATION',
    },
    {
        key: 'room',
        label: 'ROOM',
    },
    {
        key: 'trainer',
        label: 'TRAINER',
    },
];

const TrainerDashboard = () => {
    const { t } = useTranslation();

    const buttons: ActionButton[] = [
        {
            children: t('add'),
            startContent: <FaPlus />,
            color: 'primary',
            onPress: () => console.log('added'),
            alwaysEnabled: true,
        },
        {
            children: t('edit'),
            startContent: <FaPen />,
            color: 'warning',
            onPress: () => console.log('edited'),
            alwaysEnabled: false,
        },
        {
            children: t('delete'),
            startContent: <FaTrash />,
            color: 'danger',
            onPress: () => console.log('deleted'),
            alwaysEnabled: false,
        },
    ];

    return <CustomTable<Activity> columns={columns} rows={rows} actionButtons={buttons} />;
};

export default TrainerDashboard;
