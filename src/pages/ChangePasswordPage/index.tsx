import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';

import { ChangePasswordForm } from '@/features/authentication';

import Logo from '@components/Logo';

import colors from '@/colors';

const ChangePasswordPage = () => {
    const [changePasswordSuccessful, setChangePasswordSuccessful] = useState(false);

    const [searchParams] = useSearchParams();
    const { t } = useTranslation();

    const token = searchParams.get('token') ?? '';

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center gap-y-8">
            {changePasswordSuccessful ? (
                <>
                    <MdOutlinePublishedWithChanges
                        title="Changed with tick icon"
                        size="120px"
                        color={colors.grassGreen}
                    />
                    <p>{t('passwordHasBeenChanged')}</p>
                </>
            ) : (
                <>
                    <div>
                        <Logo size="lg" clickable={false} />
                        <p>{t('enterNewPassword')}</p>
                    </div>
                    <ChangePasswordForm
                        token={token}
                        setChangePasswordSuccessful={setChangePasswordSuccessful}
                    />
                </>
            )}
        </div>
    );
};

export default ChangePasswordPage;
