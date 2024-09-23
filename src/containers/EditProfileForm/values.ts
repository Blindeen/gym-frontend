import { DeepPartial } from 'react-hook-form';

import { EditProfileFormData } from './types';

export const defaultValues: DeepPartial<EditProfileFormData> = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    newPassword: '',
    birthdate: undefined,
    addressLine: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    paymentMethod: 0,
    passType: 0,
};
