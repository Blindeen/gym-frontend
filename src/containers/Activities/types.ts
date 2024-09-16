import { Page, TrainerInfo } from '@/types.ts';

export type ActivitiesProps = {
    url: string;
};

type Activity = {
    id: number;
    name: string;
    dayOfWeek: string;
    startTime: string;
    durationMin: number;
    room: string;
    trainer: TrainerInfo;
};

export type ActivitiesPage = Page<Activity>;
