import { useTranslation } from 'react-i18next';
import { Image, Link } from '@nextui-org/react';
import { Divider } from '@nextui-org/divider';

import Logo from '@/components/Logo';
import SignInForm from '@/components/SignInForm';

import routes from '@/routes.ts';
import LoginImage from '/images/illustrations/login.svg';

const SignInPage = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col justify-center gap-y-8 md:flex-row md:gap-y-0">
            <div className="w-full flex justify-center md:w-1/2 md:bg-secondary md:h-screen md:items-center">
                <Image
                    className="w-2/3 md:w-5/6 lg:w-7/12"
                    src={LoginImage}
                    alt="Sign in image"
                    radius="none"
                    removeWrapper
                    draggable={false}
                />
            </div>
            <div className="w-full flex flex-col items-center gap-y-7 md:w-1/2 md:justify-center">
                <Logo size="lg" clickable={false} />
                <div className="w-3/4 flex flex-col gap-y-2 lg:w-1/2 xl:w-2/5">
                    <SignInForm />
                    <div className="flex flex-col gap-y-5">
                        <Link
                            className="block text-right"
                            href={routes.accountRecovery}
                            size="sm"
                        >
                            {t('forgotPassword')}
                        </Link>
                        <div className="flex flex-col items-center gap-y-5">
                            <Divider className="w-11/12" />
                            <p className="text-sm">
                                {t('doNotHaveAccount')}?{' '}
                                <Link href={routes.register} size="sm">
                                    {t('signUpHere')}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
