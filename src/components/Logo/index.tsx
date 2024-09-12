import { useCallback } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { LogoProps } from './types';
import routes from '@/router/routes.ts';

const Logo = ({ clickable = true, size = 'md', onPress }: LogoProps) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const sizes = {
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-3xl',
    };

    const onPressEvent = useCallback(() => {
        onPress && onPress();
        pathname !== '/' && navigate(routes.home);
    }, [pathname]);

    return (
        <span
            className={`font-bold ${sizes[size]} ${clickable ? 'cursor-pointer' : ''}`}
            onClick={clickable ? onPressEvent : undefined}
        >
            FitSphere
        </span>
    );
};

export default Logo;
