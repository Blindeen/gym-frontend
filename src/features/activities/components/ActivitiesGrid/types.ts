import { Page } from '@/types.ts';
import { Activity } from '@/features/types';

export type ActivitiesProps = {
    url: string;
};

export type ActivitiesPage = Page<Activity>;
