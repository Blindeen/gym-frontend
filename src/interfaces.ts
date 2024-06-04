export interface MenuItem {
    name: string;
    path: string;
    authorizedRoles: string[];
}

export interface RegisterForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthdate: string;
    addressLine: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
    paymentMethod: string;
    passType: string;
}
