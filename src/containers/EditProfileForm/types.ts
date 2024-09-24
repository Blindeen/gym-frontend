import { DateValue } from '@nextui-org/react';

import { MergeAndOverride } from '@/types';

export type EditProfileData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newPassword: string;
    birthdate: string;
    addressLine: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
};

export type EditProfileFormData = MergeAndOverride<EditProfileData, { birthdate: DateValue }>;

export type PrepareEditProfileFormData = EditProfileData;
