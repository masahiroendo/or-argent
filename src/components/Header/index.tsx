import { Box, Flex, Show, Spacer } from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import CurrencySelect from './CurrencySelect';
import LanguageSelect from './LanguageSelect';
import SpotPrice from './SpotPrice';
import styles from './style.module.scss';

const Header: FC = () => {
  return (
    <Flex bg="grey.100" paddingX={{ base: '10px', md: '25px', lg: '75px' }}>
      <Box display="flex" alignItems="center" gap={2}>
        <SpotPrice asset={'OR'} price={1783.85} symbol={'€'} openPrice={1780} />
        <SpotPrice asset={'ARGENT'} price={21.25} symbol={'€'} openPrice={22} />
      </Box>
      <Spacer />
      <Box>
        <Show above="md">
          <NavLink to="contact" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Contact
          </NavLink>
        </Show>
        <LanguageSelect />
        <CurrencySelect />
      </Box>
    </Flex>
  );
};

export default Header;
