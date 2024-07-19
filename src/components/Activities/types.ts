import { Page, DayOfWeek, TrainerInfo } from '@/types.ts';

export type ActivitiesProps = {
    url: string;
};

type Activity = {
    id: number;
    name: string;
    dayOfWeek: DayOfWeek;
    startTime: Date;
    endTime: Date;
    room: string;
    trainer: TrainerInfo;
};

export type ActivitiesPage = Page<Activity>;
