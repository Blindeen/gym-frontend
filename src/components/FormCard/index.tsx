import { ReactNode } from 'react';

interface FormCardProps {
    children: ReactNode;
}

const FormCard = ({ children }: FormCardProps) => {
    return (
        <div className="flex flex-col items-center py-6 px-12 bg-white rounded-large">
            {children}
        </div>
    );
};

export default FormCard;
