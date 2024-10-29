import { ChangeEvent, useState } from 'react';
import { Avatar } from '@nextui-org/react';

import useRequest from '@hooks/useRequest';

import { ImageInputProps, ImageResponse } from './types';

const UploadImage = ({ src, url, method, onSuccessfulUpload, fallback }: ImageInputProps) => {
    const [imageURL, setImageURL] = useState<string | undefined>(() => src ?? undefined);

    const { sendRequest } = useRequest<FormData, ImageResponse>(
        url,
        method,
        { 'Content-Type': 'multipart/form-data' },
        ({ imageURL }) => {
            setImageURL(imageURL);
            onSuccessfulUpload?.(imageURL);
        }
    );

    const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (fileList !== null) {
            const [image] = fileList;
            const formData = new FormData();
            formData.append('image', image);
            await sendRequest(formData);
        }
    };

    return (
        <label className="w-fit cursor-pointer rounded-full">
            <Avatar
                className="h-[150px] w-[150px]"
                classNames={{
                    name: 'text-4xl font-bold',
                    icon: 'text-white',
                }}
                src={imageURL}
                name={fallback}
                imgProps={{ draggable: false }}
                isBordered
            />
            <input
                className="hidden"
                type="file"
                accept=".jpg,.jpeg,.png,.gif"
                onChange={onFileChange}
            />
        </label>
    );
};

export default UploadImage;
