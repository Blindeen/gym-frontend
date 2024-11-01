import { TimeInputValue } from '@nextui-org/react';

import { MergeAndOverride } from '@/types';
import { Activity } from '../../types';

export type AddEditActivityModalProps = {
    activity?: Activity;
    onClose: () => void;
    onAddEditSuccess: () => void;
    isOpen: boolean;
};

export type AddEditActivityFormData = {
    name: string;
    dayOfWeek: string;
    startTime: TimeInputValue;
    durationMin: string;
    roomId: string;
};

export type AddEditActivityRequestData = MergeAndOverride<
    AddEditActivityFormData,
    { startTime: string }
>;

type Room = {
    id: number;
    name: string;
};

export type PrepareAddEditActivityFormData = {
    rooms: Room[];
};
