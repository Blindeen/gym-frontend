enum ButtonType {
    primary = 'bg-blue-500 text-white',
    secondary = 'bg-gray-400 text-white',
    danger = 'bg-red-500 text-white',
}

interface ButtonProps {
    children: string;
    type?: keyof typeof ButtonType;
    onClick?: () => void;
}

const Button = ({ children, type = 'primary', onClick }: ButtonProps) => {
    const buttonType = ButtonType[type];

    return (
        <button
            className={`min-w-28 p-2 rounded-large ${buttonType} font-bold`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
