import LoginImage from '/images/illustrations/login.svg';
import { Image } from '@nextui-org/react';

const SignInPage = () => {
    return (
        <div className="flex flex-wrap gap-y-5 lg:min-h-screen">
            <div className="w-full flex justify-center md:w-1/2 md:bg-secondary md:h-screen md:items-center">
                <Image
                    className="w-2/3 mt-5 md:mt-0"
                    src={LoginImage}
                    alt="Sign in image"
                    radius="none"
                    removeWrapper
                    draggable={false}
                />
            </div>
            <div className="w-full md:w-1/2"></div>
        </div>
    );
};

export default SignInPage;
