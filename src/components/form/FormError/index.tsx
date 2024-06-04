const FormError = ({ message }: { message?: string }) => {
    return <div className="text-red-500">{message}</div>;
};

export default FormError;
