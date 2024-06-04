import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password';
    label: string;
    isRequired?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, type, isRequired = false, ...props }, ref) => {
        const id = label.toLowerCase();

        return (
            <div className="relative w-full text-sm">
                <label
                    htmlFor={id}
                    className="absolute left-[20px] top-[-6.4px] px-1.5 bg-white"
                >
                    {isRequired && <span className="text-red-500">*</span>}
                    {label}
                </label>
                <input
                    id={id}
                    className="box-border p-3 border-2 border-solid border-blue-500 rounded-large focus:outline-none"
                    name="password"
                    type={type}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);

export default Input;
