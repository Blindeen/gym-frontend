import QRCode from 'qrcode';

import { Image } from '@/types';

export const areStringsEqual = (string1: string, string2: string) => string1 === string2;

export const base64ToSrc = (base64: string, type: string) => `data:${type};base64,${base64}`;

export const base64ToFile = (image: Image | null) => {
    if (!image) {
        return null;
    }

    const { name, type, data } = image;

    const byteCharacters = atob(data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: type });
    return new File([blob], name);
};

export const valueToPngQRCodeDataURL = async (value: string, size: number) => {
    try {
        const qrCodeDataURL = await QRCode.toDataURL(value, {
            width: size,
        });
        return qrCodeDataURL;
    } catch {
        return '';
    }
};
