import { Box, Button, ButtonGroup, Flex, Show, Spacer } from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import CurrencySelect from './CurrencySelect';
import LanguageSelect from './LanguageSelect';
import SpotPrice from './SpotPrice';
import styles from './style.module.scss';
import { ThemeSwitchBtn } from './themeSwitchBtn';

const Header: FC = () => {
  return (
    <Flex bg="grey.100" paddingX={{ base: '10px', md: '25px', lg: '75px' }}>
      <Box display="flex" alignItems="center" gap={2}>
        <NavLink to="Gold" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          <SpotPrice asset={'OR'} price={1783.85} symbol={'€'} openPrice={1780} />
        </NavLink>
        <NavLink to="Silver" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          <SpotPrice asset={'ARGENT'} price={21.25} symbol={'€'} openPrice={22} />
        </NavLink>
      </Box>
      <Spacer />
      <Show above="sm">
        <ButtonGroup p={1}>
          <NavLink to="contact" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <Button>Contact</Button>
          </NavLink>
          <LanguageSelect />
          <CurrencySelect />
          <ThemeSwitchBtn />
        </ButtonGroup>
      </Show>
    </Flex>
  );
};

export default Header;
