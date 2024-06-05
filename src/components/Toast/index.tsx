import { ToastContainer, ToastContainerProps, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({
    position = 'bottom-right',
    autoClose = 2500,
    ...props
}: ToastContainerProps) => {
    return (
        <ToastContainer
            position={position}
            autoClose={autoClose}
            transition={Zoom}
            stacked
            hideProgressBar
            {...props}
        />
    );
};

export default Toast;
