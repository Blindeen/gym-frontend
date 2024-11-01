import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@nextui-org/react';
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa6';

import CustomTable from '@components/CustomTable';
import { ActionButton, Key } from '@components/CustomTable/types';

import { DeleteActivityModal, Activity, AddEditActivityModal } from '@/features/activities';

import useSearchParams from '@hooks/useSearchParams';
import useFetch from '@hooks/useFetch';

import { Page } from '@/types';

const TrainerDashboard = () => {
    const [selectedActivityId, setSelectedActivityId] = useState<Key>();

    const { t } = useTranslation();
    const {
        isOpen: isDeleteModalOpen,
        onOpen: onDeleteModalOpen,
        onClose: onDeleteModalClose,
    } = useDisclosure();
    const {
        isOpen: isAddEditModalOpen,
        onOpen: onAddEditModalOpen,
        onClose: onAddEditModalClose,
    } = useDisclosure();

    const { searchParams, setSearchParams } = useSearchParams({
        pageNumber: 1,
        pageSize: 5,
        name: '',
    });
    const { data, isLoading, fetchData } = useFetch<Page<Activity>>(
        '/members/activities',
        searchParams
    );

    const columns = [
        {
            key: 'name',
            label: t('activityTableColumns.name'),
        },
        {
            key: 'dayOfWeek.label',
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
            key: 'room.name',
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
            className: 'text-white',
            startContent: <FaPlus />,
            color: 'primary',
            onPress: () => {
                setSelectedActivityId(undefined);
                onAddEditModalOpen();
            },
            alwaysEnabled: true,
        },
        {
            children: t('edit'),
            startContent: <FaPen />,
            color: 'warning',
            onPress: () => onAddEditModalOpen(),
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
                        data={data}
                        actionButtons={buttons}
                        selectedKey={selectedActivityId}
                        onRowSelection={setSelectedActivityId}
                        onPageChange={(page) => {
                            setSelectedActivityId(undefined);
                            setSearchParams((prevState) => ({ ...prevState, pageNumber: page }));
                        }}
                        onSearch={(search) => {
                            setSelectedActivityId(undefined);
                            setSearchParams((prevState) => ({
                                ...prevState,
                                name: search,
                                pageNumber: 1,
                            }));
                        }}
                        isLoading={isLoading}
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
            <AddEditActivityModal
                activity={data?.content.find(
                    (activity) => activity.id === Number(selectedActivityId)
                )}
                onClose={onAddEditModalClose}
                onAddEditSuccess={async () => {
                    await fetchData();
                    setSelectedActivityId(undefined);
                }}
                isOpen={isAddEditModalOpen}
            />
        </>
    );
};

export default TrainerDashboard;
