import { useNavigate } from 'react-router-dom';

import routes from '@/routes.ts';
import { LogoProps } from '@/components/Logo/types.ts';

const Logo = ({ clickable = true, size = 'md' }: LogoProps) => {
    const navigate = useNavigate();

    const sizes = {
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-3xl',
    };

    return (
        <span
            className={`font-bold ${sizes[size]}${clickable ? ' cursor-pointer' : ''}`}
            onClick={clickable ? () => navigate(routes.home) : undefined}
        >
            FitSphere
        </span>
    );
};

export default Logo;
