import { useTranslation } from 'react-i18next';
import { Spinner } from '@nextui-org/spinner';

const LoadingSpinner = () => {
    const { t } = useTranslation();

    return <Spinner classNames={{ base: 'w-full h-full' }} size="lg" label={`${t('loading')}...`} />;
};

export default LoadingSpinner;
