import { Box, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AddSingleItemToCartButton from '../../components/buttons/AddSingleItemToCartButton';
import { CarouselItemType } from '../../constants/products';

import { CurrencyContext } from '../../contexts/CurrencyContext';
import { ROUTES } from '../../router/constant';

type CarouselItemProps = {
  item: CarouselItemType;
};

const CarouselItem: FC<CarouselItemProps> = ({ item: { id, image, metal, name, price, slug } }) => {
  const { currency } = useContext(CurrencyContext);

  const borderColor = metal === 'gold' ? 'gold.400' : 'silver.400';

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      cursor="pointer"
      justifyContent="space-between"
      display="flex"
      border="2px"
      borderBottomWidth="7px"
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
        <Text cursor="grab" _active={{ cursor: 'grabbing' }} fontWeight="semibold" fontSize="xl">
          {name}
        </Text>
      </Stack>
      <VStack justifyContent="space-between" p={2}>
        <HStack fontWeight="semibold" fontSize="lg">
          <NavLink to={`/${ROUTES.PRODUCTS}/${slug}`}>
            <Box whiteSpace="nowrap">
              {price.toFixed(2)} {currency.symbol}
            </Box>
          </NavLink>
        </HStack>
        <AddSingleItemToCartButton id={id} metal={metal} />
      </VStack>
    </Stack>
  );
};

export default CarouselItem;
