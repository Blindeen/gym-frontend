import { ReactNode } from 'react';

interface FormElementWrapperProps {
    children: ReactNode;
    id: string;
    label: string;
    isRequired: boolean;
}

const FormElementWrapper = ({
    children,
    id,
    label,
    isRequired,
}: FormElementWrapperProps) => {
    return (
        <div className="relative w-full text-sm">
            <label
                htmlFor={id}
                className="absolute left-[20px] top-[-8.5px] px-1.5 bg-white"
            >
                {isRequired && <span className="text-red-500">*</span>}
                {label}
            </label>
            {children}
        </div>
    );
};

export default FormElementWrapper;
