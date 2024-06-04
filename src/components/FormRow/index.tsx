import { ReactNode } from 'react';

interface FormRowProps {
    children: ReactNode;
}

const FormRow = ({ children }: FormRowProps) => {
    return <div className="flex justify-between gap-2.5">{children}</div>;
};

export default FormRow;
