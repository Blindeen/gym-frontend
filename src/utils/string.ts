export const areStringsEqual = (string1: string, string2: string) => string1 === string2;

export const base64ToSrc = (base64: string, type: string) => `data:${type};base64,${base64}`;

export const base64ToFile = (name: string, type: string, base64: string) => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: type });
    return new File([blob], name);
};
