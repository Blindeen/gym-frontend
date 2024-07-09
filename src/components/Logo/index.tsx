import { useNavigate } from 'react-router-dom';

import routes from '@/routes.ts';

const Logo = ({ clickable }: { clickable: boolean }) => {
    const navigate = useNavigate();

    return (
        <h1
            className={`font-bold text-2xl ${clickable ? 'cursor-pointer' : ''}`}
            onClick={clickable ? () => navigate(routes.home) : undefined}
        >
            FitSphere
        </h1>
    );
};

export default Logo;
