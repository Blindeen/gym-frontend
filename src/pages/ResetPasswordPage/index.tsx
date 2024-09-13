import { useState } from 'react';

import { Button, Image, Link } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa';
import { SiTicktick } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

import ResetPasswordForm from '@containers/ResetPasswordForm';

import colors from '@/colors';
import routes from '@/router/routes';
import ForgotPasswordImage from '/images/illustrations/forgot-password.svg';

const ResetPasswordPage = () => {
    const [passwordResetSuccessful, setPasswordResetSuccessful] = useState(false);

    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
            {passwordResetSuccessful ? (
                <div className="flex flex-col items-center gap-y-8">
                    <SiTicktick title="Tick icon" size="100px" color={colors.grassGreen} />
                    <p className="text-justify text-lg">{t('passwordResetRequestHasBeenSent')}</p>
                    <Button
                        className="text-white"
                        color="primary"
                        radius="lg"
                        startContent={<FaArrowLeft title="Arrow left icon" size="20px" />}
                        onPress={() => navigate(routes.home, { replace: true })}
                    >
                        {t('backToHome')}
                    </Button>
                </div>
            ) : (
                <>
                    <Image
                        className="w-2/3 md:w-1/2 lg:w-1/3"
                        src={ForgotPasswordImage}
                        alt="Forgot password image"
                        radius="none"
                        removeWrapper
                        draggable={false}
                    />
                    <div className="flex w-10/12 flex-col gap-y-8 md:w-fit">
                        <div>
                            <h2 className="text-2xl">{t('forgotPassword')}</h2>
                            <h3 className="text-l">{t('forgotPasswordInfo')}</h3>
                        </div>
                        <ResetPasswordForm
                            setPasswordResetSuccessful={setPasswordResetSuccessful}
                        />
                        <div className="flex w-full justify-center md:w-3/4">
                            <Link className="flex w-fit gap-x-2" href={routes.signIn}>
                                <FaArrowLeft title="Arrow left icon" />
                                {t('backToLogin')}
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ResetPasswordPage;
