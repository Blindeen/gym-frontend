import { MergeAndOverride } from '@/types';

import { PageRouteProps } from '../PageRoute/types';

export type PrivatePageRouteProps = MergeAndOverride<
    PageRouteProps,
    { authorized: boolean; redirectTo?: string }
>;
