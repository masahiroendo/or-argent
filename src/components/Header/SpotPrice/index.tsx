import { FC, useContext } from 'react';
import { HStack } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

import { CurrencyContext } from '../../../contexts/CurrencyContext';

import style from './style.module.scss';
import { calculateVariation } from '../../../utils/math-utils';

type SpotPriceProps = {
  asset: string;
  price: number;
  openPrice: number;
};

const SpotPrice: FC<SpotPriceProps> = (props) => {
  const { currency } = useContext(CurrencyContext);
  const { t } = useTranslation();
  const variation = calculateVariation(props.price, props.openPrice);

  const variationStyle = variation < 0 ? 'down' : 'up';

  return (
    <HStack className={style['spot-price']}>
      <span>{t(props.asset)}</span> <span>{props.price.toFixed(2)}</span>
      <span>{currency.symbol}</span>{' '}
      {variation < 0 ? <ArrowDownIcon viewBox="0 0 24 24" color="red" /> : <ArrowUpIcon color="green" />}
      <span className={style[variationStyle]}>{variation.toPrecision(2)}%</span>
    </HStack>
  );
};

export default SpotPrice;
