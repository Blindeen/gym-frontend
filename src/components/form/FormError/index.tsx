import { FieldError } from 'react-hook-form';

const FormError = ({ error }: { error?: FieldError }) => {
    return (
        <>
            {error && (
                <div className="text-red-500 text-xs mt-1">{error.message}</div>
            )}
        </>
    );
};

export default FormError;
