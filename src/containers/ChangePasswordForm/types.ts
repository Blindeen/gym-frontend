import { MergeAndOverride } from '@/types';

export type ChangePasswordFormProps = {
    token: string;
    setChangePasswordSuccessful: (value: boolean) => void;
};

export type ChangePasswordData = {
    token: string;
    password: string;
};

export type ChangePasswordFormData = MergeAndOverride<
    ChangePasswordData,
    { confirmPassword: string }
>;
