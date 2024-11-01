export type ImageInputProps = {
    src?: string | null;
    url: string;
    method: 'POST' | 'PUT' | 'PATCH';
    onSuccessfulUpload?: (imageURL: string) => void;
    fallback?: string;
};

export type ImageResponse = {
    imageURL: string;
};
