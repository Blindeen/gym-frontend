export {
    getLocalStorageItem,
    setLocalStorageItem,
    removeLocalStorageItem,
} from '@/utils/localStorage.ts';

export {
    areStringsEqual,
    base64ToSrc,
    base64ToFile,
    valueToPngQRCodeDataURL as valueToQRCodeDataURL,
} from '@/utils/string.ts';

export { isUserAdult } from '@/utils/validators.ts';
