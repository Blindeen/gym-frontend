import { Page } from '@/types.ts';
import { Activity } from '@containers/types';

export type ActivitiesProps = {
    url: string;
};

export type ActivitiesPage = Page<Activity>;
