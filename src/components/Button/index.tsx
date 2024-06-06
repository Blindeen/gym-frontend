import { ButtonHTMLAttributes, ReactNode } from 'react';

enum ButtonType {
    primary = 'bg-blue-500 text-white',
    secondary = 'bg-gray-400 text-white',
    danger = 'bg-red-500 text-white',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    buttonType?: keyof typeof ButtonType;
    size?: 'fit' | 20 | 40 | 'full';
    onClick?: () => void;
}

const Button = ({
    children,
    buttonType = 'primary',
    size = 'fit',
    onClick,
    ...props
}: ButtonProps) => {
    const buttonStyle = ButtonType[buttonType];

    return (
        <button
            className={`w-${size} p-2 rounded-large ${buttonStyle} font-bold`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
