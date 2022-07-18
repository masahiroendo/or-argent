import { FC } from 'react';
import { HStack } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';

import style from './style.module.scss';

type SpotPriceProps = {
  asset: string;
  price: number;
  symbol: string;
  openPrice: number;
};

const calculateVariation = (price: number, openPrice: number): number => {
  if (openPrice === 0) {
    return 0;
  }
  return ((price - openPrice) / openPrice) * 100;
};

const SpotPrice: FC<SpotPriceProps> = (props) => {
  const variation = calculateVariation(props.price, props.openPrice);

  const variationStyle = variation < 0 ? 'down' : 'up';

  return (
    <HStack className={style['spot-price']}>
      <span>{props.asset}</span> <span>{props.price.toFixed(2)}</span>
      <span>{props.symbol}</span>{' '}
      {variation < 0 ? <ArrowDownIcon viewBox="0 0 24 24" color="red" /> : <ArrowUpIcon color="green" />}
      <span className={style[variationStyle]}>{variation.toPrecision(2)}%</span>
    </HStack>
  );
};

export default SpotPrice;
