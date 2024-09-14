import { MergeAndOverride } from '@/types';

import { PageRouteProps } from '../types';

export type PrivatePageRouteProps = MergeAndOverride<
    PageRouteProps,
    { authorized: boolean; redirectTo?: string }
>;
