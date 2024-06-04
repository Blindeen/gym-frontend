import { forwardRef, SelectHTMLAttributes } from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: Option[];
    isRequired?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ label, options, isRequired = false, ...props }, ref) => {
        const id = label.toLowerCase();
        const optionElements = options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ));

        return (
            <div className="relative w-full text-sm">
                <label
                    htmlFor={id}
                    className="absolute left-[20px] top-[-8.5px] px-1.5 bg-white"
                >
                    {isRequired && <span className="text-red-500">*</span>}
                    {label}
                </label>
                <select
                    id={id}
                    className="box-border w-full p-2.5 border-2 border-solid border-blue-500 rounded-large focus:outline-none"
                    ref={ref}
                    defaultValue=""
                    {...props}
                >
                    <option value="" disabled hidden></option>
                    {optionElements}
                </select>
            </div>
        );
    }
);

export default Select;
