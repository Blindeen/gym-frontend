import { HTMLAttributes } from 'react';

enum ButtonType {
    primary = 'bg-blue-500 text-white',
    secondary = 'bg-gray-400 text-white',
    danger = 'bg-red-500 text-white',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: string;
    buttonType?: keyof typeof ButtonType;
    onClick?: () => void;
}

const Button = ({
    children,
    buttonType = 'primary',
    onClick,
    ...props
}: ButtonProps) => {
    const buttonStyle = ButtonType[buttonType];

    return (
        <button
            className={`min-w-28 p-2 rounded-large ${buttonStyle} font-bold`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
