import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

import { buttonHover } from './styles';

export const ThemeSwitchBtn: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';
  const icon = isLightMode ? <MoonIcon /> : <SunIcon fontSize={'2xl'} />;
  const label = `Switch to ${colorMode} mode`;

  return (
    <IconButton
      _active={buttonHover}
      _hover={buttonHover}
      variant="ghost"
      aria-label={label}
      onClick={toggleColorMode}
      icon={icon}
    />
  );
};
