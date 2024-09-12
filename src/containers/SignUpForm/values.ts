import { DeepPartial } from 'react-hook-form';

import { SignUpFormData } from './types';

export const defaultFormValues: DeepPartial<SignUpFormData> = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthdate: undefined,
    addressLine: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    paymentMethod: 0,
    passType: 0,
    agreement: false,
};
