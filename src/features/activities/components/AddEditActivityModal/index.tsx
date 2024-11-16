import { useEffect, useMemo } from 'react';

import toast from 'react-hot-toast';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    SelectItem,
    TimeInput,
} from '@nextui-org/react';

import useFetch from '@hooks/useFetch';
import useRequest from '@hooks/useRequest';
import { FIELD_CLASS_NAMES } from '@/constants';

import { timeFromString } from './helpers';
import { defaultValues } from './values';
import {
    AddEditActivityFormData,
    AddEditActivityModalProps,
    AddEditActivityRequestData,
    PrepareAddEditActivityFormData,
} from './types';

const AddEditActivityModal = ({
    activity,
    onClose,
    onAddEditSuccess,
    isOpen,
}: AddEditActivityModalProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AddEditActivityFormData>({ defaultValues });
    const {
        i18n: { language },
        t,
    } = useTranslation();

    const { data } = useFetch<PrepareAddEditActivityFormData>('/forms/add-edit-activity');
    const { sendRequest } = useRequest<AddEditActivityRequestData>(
        activity ? `/activities/${activity.id}` : '/activities',
        activity ? 'PUT' : 'POST',
        true,
        undefined,
        () => {
            onAddEditSuccess();
            onClose();
            reset(defaultValues);
            toast.success(
                t(
                    activity
                        ? 'addEditActivityModal.updateSuccess'
                        : 'addEditActivityModal.createSuccess'
                )
            );
        }
    );

    useEffect(() => {
        if (activity) {
            const {
                name,
                dayOfWeek: { value },
                startTime,
                durationMin,
                room: { id },
            } = activity;
            reset({
                name,
                dayOfWeek: value,
                startTime: timeFromString(startTime),
                durationMin: durationMin,
                roomId: id.toString(),
            });
        } else {
            reset(defaultValues);
        }
    }, [activity]);

    const onValid = async (data: AddEditActivityFormData) => {
        const { startTime, ...rest } = data;
        const requestData = {
            ...rest,
            startTime: startTime.toString(),
        };

        await sendRequest(requestData);
    };

    const dayOfWeek = useMemo(
        () => [
            { key: 'MONDAY', label: t('dayOfWeek.monday') },
            { key: 'TUESDAY', label: t('dayOfWeek.tuesday') },
            { key: 'WEDNESDAY', label: t('dayOfWeek.wednesday') },
            { key: 'THURSDAY', label: t('dayOfWeek.thursday') },
            { key: 'FRIDAY', label: t('dayOfWeek.friday') },
            { key: 'SATURDAY', label: t('dayOfWeek.saturday') },
            { key: 'SUNDAY', label: t('dayOfWeek.sunday') },
        ],
        [language]
    );

    const fieldRules = {
        required: t('thisFieldIsRequired'),
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                <form onSubmit={handleSubmit(onValid)}>
                    <ModalHeader className="flex flex-col gap-1">
                        {t(
                            activity
                                ? 'addEditActivityModal.editHeader'
                                : 'addEditActivityModal.addHeader'
                        )}
                    </ModalHeader>
                    <ModalBody>
                        <Controller
                            control={control}
                            name="name"
                            rules={fieldRules}
                            render={({ field }) => (
                                <Input
                                    classNames={FIELD_CLASS_NAMES}
                                    type="text"
                                    label={t('addEditActivityModal.name')}
                                    radius="lg"
                                    size="sm"
                                    errorMessage={errors.name?.message}
                                    {...field}
                                    isInvalid={!!errors.name}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="dayOfWeek"
                            rules={fieldRules}
                            render={({ field }) => (
                                <Select
                                    classNames={FIELD_CLASS_NAMES}
                                    items={dayOfWeek}
                                    label={t('addEditActivityModal.dayOfWeek')}
                                    radius="lg"
                                    size="sm"
                                    errorMessage={errors.dayOfWeek?.message}
                                    selectedKeys={[field.value]}
                                    {...field}
                                    isInvalid={!!errors.dayOfWeek}
                                >
                                    {({ key, label }) => <SelectItem key={key}>{label}</SelectItem>}
                                </Select>
                            )}
                        />
                        <Controller
                            control={control}
                            name="startTime"
                            rules={fieldRules}
                            render={({ field }) => (
                                <TimeInput
                                    classNames={FIELD_CLASS_NAMES}
                                    label={t('addEditActivityModal.startTime')}
                                    radius="lg"
                                    size="sm"
                                    errorMessage={errors.startTime?.message}
                                    {...field}
                                    isInvalid={!!errors.startTime}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="durationMin"
                            rules={fieldRules}
                            render={({ field }) => (
                                <Input
                                    classNames={FIELD_CLASS_NAMES}
                                    type="number"
                                    label={t('addEditActivityModal.duration')}
                                    radius="lg"
                                    size="sm"
                                    errorMessage={errors.durationMin?.message}
                                    {...field}
                                    isInvalid={!!errors.durationMin}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="roomId"
                            rules={fieldRules}
                            render={({ field }) => (
                                <Select
                                    classNames={FIELD_CLASS_NAMES}
                                    items={data?.rooms ?? []}
                                    label={t('addEditActivityModal.room')}
                                    radius="lg"
                                    size="sm"
                                    errorMessage={errors.roomId?.message}
                                    selectedKeys={[field.value]}
                                    {...field}
                                    isInvalid={!!errors.roomId}
                                >
                                    {({ id, name }) => <SelectItem key={id}>{name}</SelectItem>}
                                </Select>
                            )}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button className="text-white" type="submit" color="primary">
                            {t('addEditActivityModal.save')}
                        </Button>
                        <Button color="default" onPress={onClose}>
                            {t('cancel')}
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
};

export default AddEditActivityModal;
