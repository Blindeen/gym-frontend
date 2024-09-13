import { useState, forwardRef } from 'react';

import { Input } from '@nextui-org/react';
import { LuEye, LuEyeOff } from 'react-icons/lu';

import { PasswordInputProps } from './types';

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <Input
            {...props}
            ref={ref}
            type={passwordVisible ? 'text' : 'password'}
            endContent={
                <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => setPasswordVisible((prevValue) => !prevValue)}
                >
                    {passwordVisible ? (
                        <LuEyeOff
                            className="pointer-events-none text-2xl text-default-400"
                            title="Hide password icon"
                        />
                    ) : (
                        <LuEye
                            className="pointer-events-none text-2xl text-default-400"
                            title="Show password icon"
                        />
                    )}
                </button>
            }
        />
    );
});

export default PasswordInput;
