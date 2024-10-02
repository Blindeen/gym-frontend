import { ChangeEventHandler } from 'react';

export type ImageInputProps = {
    name?: string;
    src: File | null;
    fallback?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};
