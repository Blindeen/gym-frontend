import { Divider } from '@nextui-org/react';

type InfoCardProps = {
    header: string;
    description: string;
    isReversed?: boolean;
};

const InfoCard = ({ header, description, isReversed = false }: InfoCardProps) => {
    const styledDivider = (
        <Divider
            className="h-3/4 w-[3px] bg-primary duration-500 group-hover:bg-secondary"
            orientation="vertical"
        />
    );

    return (
        <div className="group flex h-48 items-center gap-x-10">
            {!isReversed && styledDivider}
            <div className="flex flex-col justify-start gap-y-5">
                <h2>{header}</h2>
                <p className="text-justify">{description}</p>
            </div>
            {isReversed && styledDivider}
        </div>
    );
};

export default InfoCard;
