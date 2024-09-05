import { DateValue } from "@nextui-org/react";

import { Pass, PaymentMethod } from "@/types";

export type SignUpRequestData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthdate: string;
    addressLine: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
    paymentMethod: number;
    passType: number;
}

export type SignUpFormData = SignUpRequestData & {
    birthdate: DateValue;
    confirmPassword: string;
    agreement: boolean;
};

export type PrepareSignUpFormData = {
    passes: Pass[];
    paymentMethods: PaymentMethod[];
};
