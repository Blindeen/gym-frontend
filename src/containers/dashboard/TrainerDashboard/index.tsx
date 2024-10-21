import { useTranslation } from 'react-i18next';
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa6';

import CustomTable from '@components/CustomTable';
import { ActionButton } from '@components/CustomTable/types';

import { Activity } from '@containers/types';

const TrainerDashboard = () => {
    const { t } = useTranslation();

    const columns = [
        {
            key: 'name',
            label: t('activityTableColumns.name'),
        },
        {
            key: 'dayOfWeek',
            label: t('activityTableColumns.dayOfWeek'),
        },
        {
            key: 'startTime',
            label: t('activityTableColumns.startTime'),
        },
        {
            key: 'durationMin',
            label: t('activityTableColumns.duration'),
        },
        {
            key: 'room',
            label: t('activityTableColumns.room'),
        },
        {
            key: 'trainer',
            label: t('activityTableColumns.trainer'),
        },
    ];

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

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-3/4">
                <CustomTable<Activity>
                    columns={columns}
                    url="/member/activities"
                    actionButtons={buttons}
                />
            </div>
        </div>
    );
};

export default TrainerDashboard;
