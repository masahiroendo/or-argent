import { Stat, StatArrow, StatHelpText, StatNumber, useColorModeValue } from '@chakra-ui/react';
import { FC, useContext } from 'react';

import { selectMetalSymbol } from '../../constants/assetSymbols';
import { MetalType } from '../../constants/products';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import useOhlc from '../../hooks/use-ohlc';

type ProductPriceAndVariationProps = {
  metal: MetalType;
  price: number;
};

const ProductPriceAndVariation: FC<ProductPriceAndVariationProps> = ({ metal, price }) => {
  const { currency } = useContext(CurrencyContext);
  const descriptionColor = useColorModeValue('gray.700', 'gray.200');
  const symbol = selectMetalSymbol(metal);
  const { data } = useOhlc(symbol);
  const { variation } = data;

  return (
    <Stat>
      <StatNumber
        fontSize={{ base: '2xl', lg: '4xl' }}
        color={descriptionColor}
        fontWeight={300}>{`${price} ${currency.symbol}`}</StatNumber>
      <StatHelpText fontSize={{ base: 'xl', lg: '2xl' }}>
        <StatArrow type={variation >= 0 ? 'increase' : 'decrease'} />
        {variation.toPrecision(2)}%
      </StatHelpText>
    </Stat>
  );
};

export default ProductPriceAndVariation;
