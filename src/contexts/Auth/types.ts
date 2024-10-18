import { ReactNode } from 'react';

import { State } from '@/types.ts';

export type AuthContextType = {
    state: State;
    setState: (state: State) => void;
};

export type AuthSessionProviderProps = {
    children: ReactNode;
};
