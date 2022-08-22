import { FC, useContext, useEffect, useState } from 'react';
import { Box, Container, Show, Spacer, useColorModeValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import SpotPrice from './SpotPrice';
import Switchers from '../Switchers';
import { goldMetalsApiOHLCEndpoint, silverMetalsApiOHLCEndpoint } from '../../constants/endpoints';
import { MetalsAPIOHLCResponse } from '../../constants/apiResponses';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { COLORS } from '../../theme/colors';

import styles from './style.module.scss';

type SpotPriceDataType = {
  price: number;
  open: number;
};

const initSpotPrice: SpotPriceDataType = {
  open: 0,
  price: 0,
};

const fetchLatestGoldAndSilverPrices = async (
  iso: string,
): Promise<{ gold: SpotPriceDataType; silver: SpotPriceDataType }> => {
  const goldResponse = await fetch(goldMetalsApiOHLCEndpoint(iso));
  const goldData = (await goldResponse.json()) as MetalsAPIOHLCResponse;
  const silverResponse = await fetch(silverMetalsApiOHLCEndpoint(iso));
  const silverData = (await silverResponse.json()) as MetalsAPIOHLCResponse;

  if (!goldData.success || !silverData.success) {
    throw Error('Could not fetch data from Metals-API');
  }

  return {
    gold: {
      open: goldData?.rates?.open,
      price: goldData?.rates?.close,
    },
    silver: {
      open: silverData?.rates?.open,
      price: silverData?.rates?.close,
    },
  };
};

const Header: FC = () => {
  const [goldSpot, setGoldSpot] = useState<SpotPriceDataType>(initSpotPrice);
  const [silverSpot, setSilverSpot] = useState<SpotPriceDataType>(initSpotPrice);
  const { currency } = useContext(CurrencyContext);
  const bg = useColorModeValue(COLORS.GOLD, COLORS.DARK);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { gold, silver } = await fetchLatestGoldAndSilverPrices(currency.iso);
        setGoldSpot(gold);
        setSilverSpot(silver);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [currency]);

  return (
    <Box bg={bg}>
      <Container display="flex" px={{ base: '10px', md: '25px', lg: '75px' }} maxW="container.2xl">
        <Box display="flex" alignItems="center" gap={2} fontSize={{ base: '11px', sm: '1em' }}>
          <NavLink to="Metal/Gold" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <SpotPrice asset={'gold'} price={goldSpot.price} openPrice={goldSpot.open} />
          </NavLink>
          <NavLink to="Metal/Silver" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <SpotPrice asset={'silver'} price={silverSpot.price} openPrice={silverSpot.open} />
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

export default Header;
