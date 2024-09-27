import { ChangeEvent, forwardRef, useCallback, useEffect, useState } from 'react';
import { Avatar } from '@nextui-org/react';

import { ImageInputProps } from './types';

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
    ({ name, src, fallback, onChange }, ref) => {
        const [imageURL, setImageURL] = useState<string | undefined>(() => {
            if (src === null) {
                return undefined;
            }
            return URL.createObjectURL(src);
        });

        const unloadObjectURL = useCallback((url?: string) => {
            if (url !== undefined) {
                URL.revokeObjectURL(url);
            }
        }, []);

        const onFileChange = useCallback(
            (e: ChangeEvent<HTMLInputElement>) => {
                const fileList = e.target.files;
                if (fileList !== null) {
                    unloadObjectURL(imageURL);
                    setImageURL(URL.createObjectURL(fileList[0]));
                    onChange && onChange(e);
                }
            },
            [imageURL]
        );

        useEffect(() => {
            return () => unloadObjectURL(imageURL);
        }, []);

        return (
            <label className="w-fit cursor-pointer rounded-full">
                <Avatar
                    className="h-[150px] w-[150px]"
                    classNames={{
                        name: 'text-4xl font-bold',
                    }}
                    src={imageURL}
                    name={fallback}
                    imgProps={{ draggable: false }}
                    isBordered
                />
                <input
                    className="hidden"
                    name={name}
                    ref={ref}
                    type="file"
                    accept=".jpg,.jpeg,.png,.gif"
                    onChange={onFileChange}
                />
            </label>
        );
    }
);

export default ImageInput;
