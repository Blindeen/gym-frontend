import { Page } from '@/types';
import { Activity } from '../../types';

export type ActivitiesProps = {
    url: string;
};

export type ActivitiesPage = Page<Activity>;
