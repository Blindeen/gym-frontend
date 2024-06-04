import { forwardRef, InputHTMLAttributes } from 'react';

import ElementWrapper from '@/components/ElementWrapper';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'date' | 'password';
    label: string;
    isRequired?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, type, isRequired = false, ...props }, ref) => {
        const id = label.toLowerCase();

        return (
            <ElementWrapper id={id} label={label} isRequired={isRequired}>
                <input
                    id={id}
                    className="box-border w-full p-2.5 border-2 border-solid border-blue-500 rounded-large focus:outline-none"
                    type={type}
                    ref={ref}
                    {...props}
                />
            </ElementWrapper>
        );
    }
);

export default Input;
