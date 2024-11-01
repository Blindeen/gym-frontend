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
        <div className="grid grid-cols-4 justify-between">
            {data?.map(({ firstName, lastName, avatarURL }) => (
                <Card className="w-fit p-4">
                    <CardHeader className="flex justify-center">
                        <Avatar
                            className="h-40 w-40 rounded-xl object-cover text-large"
                            src={avatarURL ?? undefined}
                            size="lg"
                            fallback={`${firstName[0]} ${lastName[0]}`}
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
