import { FC } from 'react';
import { Box, Container, Show, Spacer, useColorModeValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import SpotPrice from './SpotPrice';
import Switchers from '../Switchers';
import { ASSET_SYMBOLS } from '../../constants/assetSymbols';
import { COLORS } from '../../theme/colors';

import styles from './style.module.scss';
import { ROUTES } from '../../router/constant';

const TopInfoBar: FC = () => {
  const bg = useColorModeValue(COLORS.GOLD, COLORS.DARK);

  return (
    <Box bg={bg}>
      <Container display="flex" px={{ base: '10px', md: '25px', lg: '75px' }} maxW="container.2xl">
        <Box display="flex" alignItems="center" gap={2} fontSize={{ base: '11px', sm: '1em' }}>
          <NavLink to={`${ROUTES.CHART}/gold`} className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <SpotPrice metal={ASSET_SYMBOLS.GOLD} />
          </NavLink>
          <NavLink to={`${ROUTES.CHART}/silver`} className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <SpotPrice metal={ASSET_SYMBOLS.SILVER} />
          </NavLink>
        </Box>
        <Spacer />
        <Show above="md">
          <Switchers />
        </Show>
      </Container>
    </Box>
  );
};

export default TopInfoBar;
