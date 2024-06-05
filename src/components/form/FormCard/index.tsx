import { ReactNode } from 'react';

interface FormCardProps {
    children: ReactNode;
}

const FormCard = ({ children }: FormCardProps) => {
    return (
        <div className="flex flex-col min-h-screen items-center py-6 px-12 bg-white rounded-large sm:px-6">
            {children}
        </div>
    );
};

export default FormCard;
