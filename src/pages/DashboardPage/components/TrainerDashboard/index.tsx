import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@nextui-org/react';
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa6';

import CustomTable from '@components/CustomTable';
import { ActionButton, Key } from '@components/CustomTable/types';

import DeleteActivityModal from '@/features/activities/components/DeleteActivityModal';
import { Activity } from '@/features/types';

import useSearchParams from '@hooks/useSearchParams';

const TrainerDashboard = () => {
    const [selectedActivityId, setSelectedActivityId] = useState<Key>();

    const { t } = useTranslation();
    const {
        isOpen: isDeleteModalOpen,
        onOpen: onDeleteModalOpen,
        onClose: onDeleteModalClose,
    } = useDisclosure();

    const { searchParams, setSearchParams } = useSearchParams({
        pageNumber: 1,
        pageSize: 5,
        name: '',
    });

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
                        searchParams={searchParams}
                        actionButtons={buttons}
                        selectedKey={selectedActivityId}
                        onRowSelection={(rowId) => setSelectedActivityId(rowId)}
                        onPageChange={(page) =>
                            setSearchParams((prevState) => ({ ...prevState, pageNumber: page }))
                        }
                        onSearch={(search) =>
                            setSearchParams((prevState) => ({ ...prevState, name: search }))
                        }
                    />
                </div>
            </div>
            <DeleteActivityModal
                activityId={selectedActivityId}
                onClose={onDeleteModalClose}
                onDeleted={() => {
                    setSelectedActivityId(undefined);
                    setSearchParams((prevState) => ({ ...prevState, pageNumber: 1 }));
                }}
                isOpen={isDeleteModalOpen}
            />
        </>
    );
};

export default TrainerDashboard;
