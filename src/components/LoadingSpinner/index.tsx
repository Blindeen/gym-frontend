import { Spinner } from '@nextui-org/spinner';

const LoadingSpinner = () => {
    return (
        <div className="flex h-full w-full justify-center">
            <Spinner size="lg" label="Loading..." />
        </div>
    );
};

export default LoadingSpinner;
