import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { DragEvent, FC, useContext } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { CurrencyContext } from '../../contexts/CurrencyContext';

export type Product = {
  productId: string;
  imageSrc: string;
  price: number;
  title: string;
  description: string;
};

type CarouselItemProps = {
  item: Omit<Product, 'description'>;
};

const CarouselItem: FC<CarouselItemProps> = ({ item }) => {
  const { imageSrc, price, title } = item;
  const { currency } = useContext(CurrencyContext);
  // TODO: differenciate between the product to get the right color
  const isGold = true;
  const borderColor = isGold ? 'gold.700' : 'silver.500';

  const handleDragStart = (e: DragEvent) => {
    e.preventDefault();
  };

  return (
    <Box
      cursor="pointer"
      justifyContent="space-between"
      display="flex"
      onDragStart={handleDragStart}
      border="1px"
      borderColor={borderColor}
      borderRadius="5px"
      ml="12px"
      mr="12px">
      <HStack alignItems="center">
        <Image src={imageSrc} alt={title} objectFit="cover" />
        <Text>{title}</Text>
      </HStack>
      <VStack justifyContent="space-between" p={2}>
        <HStack>
          <Box>{price.toFixed(2)}</Box>
          <Box>{currency.symbol}</Box>{' '}
        </HStack>
        <Box>
          <CgShoppingCart />
        </Box>
      </VStack>
    </Box>
  );
};

export default CarouselItem;
