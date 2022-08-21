import { Box, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import GoldIconButton from '../../components/buttons/GoldIconButton';
import SilverIconButton from '../../components/buttons/SilverIconButton';
import { Product } from '../../constants/products';

import { CurrencyContext } from '../../contexts/CurrencyContext';
import { ROUTES } from '../../router/constant';

type CarouselItemProps = {
  item: Pick<Product, 'metal' | 'name' | 'price' | 'slug'> & { image: string };
};

const CarouselItem: FC<CarouselItemProps> = ({ item: { image, metal, name, price, slug } }) => {
  const { currency } = useContext(CurrencyContext);

  const borderColor = metal === 'gold' ? 'gold.400' : 'silver.400';

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      cursor="pointer"
      justifyContent="space-between"
      display="flex"
      border="2px"
      borderColor={borderColor}
      borderRadius="10px"
      mx="12px"
      px="12px">
      <Stack alignItems="center" direction={{ base: 'column', lg: 'row' }}>
        <NavLink to={`/${ROUTES.PRODUCTS}/${slug}`}>
          <Image
            src={image}
            alt={name}
            objectFit="cover"
            maxH={{ base: '250px', lg: '150px' }}
            maxW={{ base: '250px', lg: '150px' }}
          />
        </NavLink>
        <Text fontWeight="semibold" fontSize="xl">
          {name}
        </Text>
      </Stack>
      <VStack justifyContent="space-between" p={2}>
        <HStack fontWeight="semibold" fontSize="lg">
          <NavLink to={`/${ROUTES.PRODUCTS}/${slug}`}>
            <Box>
              {price.toFixed(2)} {currency.symbol}
            </Box>
          </NavLink>
        </HStack>
        <Box>
          {metal === 'gold' ? (
            <GoldIconButton aria-label="Add to cart">
              <CgShoppingCart />
            </GoldIconButton>
          ) : (
            <SilverIconButton aria-label="Add to cart">
              <CgShoppingCart />
            </SilverIconButton>
          )}
        </Box>
      </VStack>
    </Stack>
  );
};

export default CarouselItem;
