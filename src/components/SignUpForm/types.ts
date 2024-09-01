import { DateValue } from "@nextui-org/react";

import { Pass, PaymentMethod } from "@/types";

export type SignUpFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthdate: DateValue;
    addressLine: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
    paymentMethod: number;
    passType: number;
    agreement: boolean;
};

export type PrepareSignUpFormData = {
    passes: Pass[];
    paymentMethods: PaymentMethod[];
};
