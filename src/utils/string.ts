export const areStringsEqual = (string1: string, string2: string) => string1 === string2;

export const base64ToSrc = (base64: string, type: string) => `data:${type};base64,${base64}`;
