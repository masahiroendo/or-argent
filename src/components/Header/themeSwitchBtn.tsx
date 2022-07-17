import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

export const ThemeSwitchBtn: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';
  const icon = isLightMode ? <MoonIcon /> : <SunIcon />;
  const label = `Switch to ${colorMode} mode`;

  return <IconButton aria-label={label} onClick={toggleColorMode} icon={icon} />;
};
