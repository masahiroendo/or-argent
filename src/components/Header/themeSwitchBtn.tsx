import { Button, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

export const ThemeSwitchBtn: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <Button onClick={toggleColorMode}>Switch {colorMode === 'light' ? 'Dark' : 'Light'}</Button>;
};
