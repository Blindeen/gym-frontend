import { DateValue } from '@nextui-org/react';

import { UserData, MergeAndOverride, Pass, PaymentMethod } from '@/types';

export type EditProfileRequestData = MergeAndOverride<UserData, { newPassword: string }>;

export type EditProfileFormData = MergeAndOverride<EditProfileRequestData, { birthdate: DateValue }>;

export type PrepareEditProfileFormData = {
    userData: EditProfileFormData;
    passes: Pass[];
    paymentMethods: PaymentMethod[];
}
