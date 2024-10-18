const styles = 'font-weight: bold;';

const info = (...data: any[]) => console.info('%cINFO', styles, ...data);

const warning = (...data: any[]) => console.warn('%cWARNING', styles, ...data);

const error = (...data: any[]) => console.error('%cERROR', styles, ...data);

export const log = (type: 'info' | 'warning' | 'error' = 'info', ...data: any[]) => {
    switch (type) {
        case 'info':
            info(...data);
            break;
        case 'warning':
            warning(...data);
            break;
        case 'error':
            error(...data);
            break;
    }
};
