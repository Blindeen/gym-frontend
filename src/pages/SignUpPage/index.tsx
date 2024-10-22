import { useTranslation } from 'react-i18next';
import { Image, Link } from '@nextui-org/react';
import { Divider } from '@nextui-org/divider';

import SignUpForm from '@/features/authentication/components/SignUpForm';
import Logo from '@/components/Logo';

import routes from '@/router/routes.ts';
import SignUpImage from '/images/illustrations/sign-up.svg';

const SignUpPage = () => {
    const { t } = useTranslation();

    return (
        <div className="flex min-h-screen flex-col-reverse justify-center gap-y-8 md:flex-row md:gap-y-0">
            <div className="flex w-full flex-col items-center gap-y-7 pb-5 md:w-1/2 md:justify-center md:pt-5 lg:pb-0 lg:pt-0">
                <Logo size="lg" clickable={false} />
                <div className="flex w-3/4 flex-col gap-y-8 lg:w-4/5 xl:w-3/4">
                    <SignUpForm />
                    <div className="flex flex-col items-center gap-y-5">
                        <Divider className="w-11/12" />
                        <p className="text-sm">
                            {t('alreadyHaveAccount')}?{' '}
                            <Link href={routes.signIn} size="sm">
                                {t('signIn')}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex w-full justify-center md:mt-0 md:w-1/2 md:items-center md:bg-secondary">
                <Image
                    className="w-3/4 pt-5 md:w-5/6 lg:w-2/3"
                    src={SignUpImage}
                    alt="Sign up image"
                    radius="none"
                    removeWrapper
                    draggable={false}
                />
            </div>
        </div>
    );
};

export default SignUpPage;
