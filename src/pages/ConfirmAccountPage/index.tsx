import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Image } from '@nextui-org/react';

import useRequest from '@/hooks/useRequest';
import routes from '@/router/routes';
import ConfirmAccountImage from '/images/illustrations/confirm-account.svg';

import { ConfirmAccountRequestData } from './types';

const ConfirmAccountPage = () => {
    const [searchParams] = useSearchParams();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { sendRequest, loadingRequest } = useRequest<ConfirmAccountRequestData>(
        '/member/confirm-account',
        'PUT',
        () => {
            toast.success(t('accountConfirmed'));
            navigate(routes.home, { replace: true });
        }
    );

    const onClick = async () =>
        await sendRequest({
            token: searchParams.get('token') ?? '',
        });

    return (
        <div className="flex h-dvh w-full flex-col items-center justify-center gap-y-10">
            <h1 className="text-5xl font-bold">{t('confirmAccount')}</h1>
            <Image
                className="w-2/3 md:w-1/3 lg:w-1/5"
                src={ConfirmAccountImage}
                radius="none"
                draggable={false}
                removeWrapper
            />
            <Button
                className="text-white"
                size="lg"
                color="primary"
                radius="lg"
                onPress={onClick}
                isLoading={loadingRequest}
            >
                {t('confirm')}
            </Button>
        </div>
    );
};

export default ConfirmAccountPage;
