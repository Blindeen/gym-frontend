import { Key, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@nextui-org/react';
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa6';

import CustomTable from '@components/CustomTable';
import { ActionButton } from '@components/CustomTable/types';

import DeleteActivityModal from '@/features/activities/components/DeleteActivityModal';
import { Activity } from '@/features/types';

const TrainerDashboard = () => {
    const [selectedActivityId, setSelectedActivityId] = useState<Key>();

    const { t } = useTranslation();
    const {
        isOpen: isDeleteModalOpen,
        onOpen: onDeleteModalOpen,
        onClose: onDeleteModalClose,
    } = useDisclosure();

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
            onPress: () => onDeleteModalOpen(),
            alwaysEnabled: false,
        },
    ];

    return (
        <>
            <div className="flex justify-center">
                <div className="w-full md:w-3/4">
                    <CustomTable<Activity>
                        columns={columns}
                        url="/member/activities"
                        actionButtons={buttons}
                        onRowSelection={(rowId) => setSelectedActivityId(rowId)}
                    />
                </div>
            </div>
            <DeleteActivityModal
                activityId={selectedActivityId}
                isOpen={isDeleteModalOpen}
                onClose={onDeleteModalClose}
            />
        </>
    );
};

export default TrainerDashboard;
