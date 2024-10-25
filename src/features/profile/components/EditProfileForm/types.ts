import { DateValue } from '@nextui-org/react';

import { MergeAndOverride, Image } from '@/types';

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
    profilePicture: Image | null;
};

export type EditProfileFormData = MergeAndOverride<
    EditProfileData,
    { birthdate: DateValue; profilePicture: File | null }
>;

export type EditProfileRequestData = Omit<
    EditProfileFormData,
    keyof { email: string; birthdate: DateValue; profilePicture: File | null }
>;
