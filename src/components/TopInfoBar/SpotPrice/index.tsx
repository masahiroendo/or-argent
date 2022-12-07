import { FC, useContext } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

import { CurrencyContext } from '../../../contexts/CurrencyContext';
import style from './style.module.scss';
import useOhlc from '../../../hooks/use-ohlc';
import { AssetSymbol } from '../../../constants/assetSymbols';

type SpotPriceProps = {
  metal: AssetSymbol;
};

const SpotPrice: FC<SpotPriceProps> = ({ metal }) => {
  const { currency } = useContext(CurrencyContext);
  const { t } = useTranslation();
  const { data } = useOhlc(metal.symbol);
  const { close, variation } = data;
  const variationStyle = variation < 0 ? 'down' : 'up';

  return (
    <HStack className={style['spot-price']}>
      <Box>{t(metal.name)}</Box> <Box>{close.toFixed(2)}</Box>
      <Box>{currency.symbol}</Box>{' '}
      {variation < 0 ? <ArrowDownIcon viewBox="0 0 24 24" color="red" /> : <ArrowUpIcon color="green" />}
      <Box className={style[variationStyle]}>{variation.toPrecision(2)}%</Box>
    </HStack>
  );
};

export default SpotPrice;
