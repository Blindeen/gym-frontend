import { DeepPartial } from 'react-hook-form';
import { CalendarDate } from '@internationalized/date';

import { EditProfileFormData } from './types';

export const defaultValues: DeepPartial<EditProfileFormData> = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    newPassword: '',
    birthdate: new CalendarDate(0, 0, 0),
    addressLine: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
};
