const FormError = ({ message }: { message?: string }) => {
    return <div className="text-red-500 text-xs mt-1">{message}</div>;
};

export default FormError;
