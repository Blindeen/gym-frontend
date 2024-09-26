import { ChangeEvent, useEffect, useState } from 'react';
import { Avatar } from '@nextui-org/react';

import { ImageInputProps } from './types';

const ImageInput = ({ src }: ImageInputProps) => {
    const [imageURL, setImageURL] = useState<string | undefined>(src);

    const unloadObjectURL = (url?: string) => {
        if (url) {
            URL.revokeObjectURL(url);
        }
    };

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (fileList) {
            unloadObjectURL(imageURL);
            setImageURL(URL.createObjectURL(fileList[0]));
        }
    };

    useEffect(() => {
        return () => unloadObjectURL(imageURL);
    }, []);

    return (
        <label className="w-fit rounded-full">
            <Avatar
                className="h-[150px] w-[150px]"
                src={imageURL}
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

export default ImageInput;
