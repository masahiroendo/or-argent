import { FC, useContext, useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Flex, Show, Spacer } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import CurrencySelect from './CurrencySelect';
import LanguageSelect from './LanguageSelect';
import SpotPrice from './SpotPrice';
import styles from './style.module.scss';
import { ThemeSwitchBtn } from './themeSwitchBtn';
import { makeMetalPricesApiOHLCEndpoint } from '../../constants/endpoints';
import { MetalsAPIOHLCResponse } from '../../constants/apiResponses';
import { CurrencyContext } from '../../contexts/CurrencyContext';

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
  const goldResponse = await fetch(makeMetalPricesApiOHLCEndpoint('XAU', iso));
  const goldData = (await goldResponse.json()) as MetalsAPIOHLCResponse;
  const silverResponse = await fetch(makeMetalPricesApiOHLCEndpoint('XAG', iso));
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
  const { t } = useTranslation();
  const { currency } = useContext(CurrencyContext);

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
    <Flex bg="grey.100" paddingX={{ base: '10px', md: '25px', lg: '75px' }}>
      <Box display="flex" alignItems="center" gap={2}>
        <NavLink to="Metal/Gold" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          <SpotPrice asset={'gold'} price={goldSpot.price} openPrice={goldSpot.open} />
        </NavLink>
        <NavLink to="Metal/Silver" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          <SpotPrice asset={'silver'} price={silverSpot.price} openPrice={silverSpot.open} />
        </NavLink>
      </Box>
      <Spacer />
      <Show above="sm">
        <ButtonGroup p={1}>
          <NavLink to="contact" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <Button>{t('contact')}</Button>
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
