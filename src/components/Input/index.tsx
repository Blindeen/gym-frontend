import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password';
    label: string;
    isRequired?: boolean;
}

const Input = ({ label, type, isRequired = false }: InputProps) => {
    const id = label.toLowerCase();

    return (
        <div className="relative text-[13px]">
            <label
                htmlFor={id}
                className="absolute left-[20px] top-[-6.4px] px-1.5 bg-white"
            >
                {isRequired && <span className="text-red-500">*</span>}
                {label}
            </label>
            <input
                id={id}
                className="box-border p-2.5 border-2 border-solid border-blue-500 rounded-large focus:outline-none"
                type={type}
            />
        </div>
    );
};

export default Input;
