import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

import { CustomCardProps } from './types';

const CustomCard = ({
    title,
    subtitle,
    description,
    imageSrc,
    isPressable = false,
}: CustomCardProps) => {
    return (
        <Card className="justify-center px-4 py-8" shadow="sm" isPressable={isPressable}>
            <CardHeader className="flex-col items-start px-4">
                <h4 className="text-xl font-bold">{title}</h4>
                <small className="text-base text-default-500">{subtitle}</small>
                <small className="text-base text-default-500">{description}</small>
            </CardHeader>
            {imageSrc && (
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card image"
                        className="rounded-xl object-cover"
                        src={imageSrc}
                        width={270}
                    />
                </CardBody>
            )}
        </Card>
    );
};

export default CustomCard;
