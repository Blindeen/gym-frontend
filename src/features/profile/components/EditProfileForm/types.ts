import { DateValue } from '@nextui-org/react';

import { MergeAndOverride } from '@/types';

export type EditProfileData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newPassword: string;
    birthdate: string;
    avatarURL: string | null;
    addressLine: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
};

export type EditProfileFormData = Omit<
    MergeAndOverride<EditProfileData, { birthdate: DateValue }>,
    keyof { avatarURL: string | null }
>;

export type EditProfileRequestData = Omit<
    EditProfileFormData,
    keyof { email: string; birthdate: DateValue }
>;
