import { Spinner } from '@nextui-org/spinner';

const LoadingSpinner = () => {
    return (
        <Spinner
            classNames={{ base: 'w-full h-full' }}
            size="lg"
            label="Loading..."
        />
    );
};

export default LoadingSpinner;
