import { useContext } from 'react';

import { Switch } from '@nextui-org/react';
import { TbSunFilled, TbMoonFilled } from 'react-icons/tb';

import { ThemeContext } from '@/contexts/Theme';

const ThemeSwitcher = () => {
    const { value, toggle } = useContext(ThemeContext);

    return (
        <Switch
            size="lg"
            startContent={<TbSunFilled title="Sun icon" />}
            endContent={<TbMoonFilled title="Moon icon" />}
            onValueChange={toggle}
            isSelected={value}
        />
    );
};

export default ThemeSwitcher;
