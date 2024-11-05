import { Avatar, Card, CardBody, CardHeader } from '@nextui-org/react';

import LoadingSpinner from '@components/LoadingSpinner';
import useFetch from '@hooks/useFetch';

type Trainer = {
    firstName: string;
    lastName: string;
    avatarURL: string | null;
};

const TrainerGrid = () => {
    const { data, isLoading } = useFetch<Trainer[]>('/members/trainers', undefined, false);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="grid w-full grid-cols-1 justify-items-center gap-y-5 md:grid-cols-3 xl:grid-cols-4">
            {data?.map(({ firstName, lastName, avatarURL }, idx) => (
                <Card key={idx} className="w-full p-4 md:w-fit">
                    <CardHeader className="flex justify-center">
                        <Avatar
                            className="h-40 w-40 rounded-xl object-cover text-3xl"
                            src={avatarURL ?? undefined}
                            size="lg"
                            fallback={`${firstName[0]}${lastName[0]}`}
                            imgProps={{ draggable: false }}
                        />
                    </CardHeader>
                    <CardBody className="overflow-visible text-center">
                        <p className="text-lg font-semibold">{`${firstName} ${lastName}`}</p>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default TrainerGrid;
