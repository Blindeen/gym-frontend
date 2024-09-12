import dayjs from 'dayjs';
import { DateValue } from '@nextui-org/react';

export const isUserAdult = (birthdate: DateValue) => {
    const dateOfBirth = dayjs(birthdate.toString());
    const yearsAgo = dayjs().subtract(18, 'years');
    return dateOfBirth.isBefore(yearsAgo, 'days') || dateOfBirth.isSame(yearsAgo, 'days');
};
