import { Image } from '@nextui-org/react';
import LoginImage from '/images/illustrations/login.svg';

import Logo from '@/components/Logo';
import SignInForm from '@/components/SignInForm';

const SignInPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center gap-y-8 md:flex-row md:gap-y-0">
            <div className="w-full flex justify-center md:w-1/2 md:bg-secondary md:h-screen md:items-center">
                <Image
                    className="w-2/3"
                    src={LoginImage}
                    alt="Sign in image"
                    radius="none"
                    removeWrapper
                    draggable={false}
                />
            </div>
            <div className="w-full flex flex-col items-center gap-y-4 md:w-1/2 md:justify-center">
                <Logo clickable={false} />
                <SignInForm />
            </div>
        </div>
    );
};

export default SignInPage;
