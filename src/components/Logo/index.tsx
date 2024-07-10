import { useNavigate } from 'react-router-dom';

import routes from '@/routes.ts';
import { LogoProps } from '@/components/Logo/types.ts';

const Logo = ({ clickable = true, size = 'md' }: LogoProps) => {
    const navigate = useNavigate();

    const sizes = {
        sm: 'xl',
        md: '2xl',
        lg: '3xl',
    };

    return (
        <h1
            className={`font-bold text-${sizes[size]} ${clickable ? 'cursor-pointer' : ''}`}
            onClick={clickable ? () => navigate(routes.home) : undefined}
        >
            FitSphere
        </h1>
    );
};

export default Logo;
