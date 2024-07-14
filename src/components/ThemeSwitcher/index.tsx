import { useContext } from 'react';

import { Switch } from '@nextui-org/react';
import { TbSunFilled, TbMoonFilled } from 'react-icons/tb';

import { ThemeContext } from '@/providers/ThemeProvider';

const ThemeSwitcher = () => {
    const { value, toggle } = useContext(ThemeContext);

    return (
        <Switch
            size="lg"
            startContent={<TbSunFilled />}
            endContent={<TbMoonFilled />}
            onValueChange={() => toggle()}
            isSelected={value}
        />
    );
};

export default ThemeSwitcher;
