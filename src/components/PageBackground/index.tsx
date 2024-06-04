import { ReactNode } from 'react';

interface PageBackgroundProps {
    children: ReactNode;
}

const PageBackground = ({ children }: PageBackgroundProps) => {
    return (
        <div className="w-screen h-screen flex justify-center items-center m-0 bg-blue-500">
            {children}
        </div>
    );
};

export default PageBackground;
