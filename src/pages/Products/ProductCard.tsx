import { Box, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

import GoldIconButton from '../../components/buttons/GoldIconButton';
import SilverIconButton from '../../components/buttons/SilverIconButton';
import { COLORS } from '../../theme/colors';
import { Product } from '../../constants/products';
import { CurrencyContext } from '../../contexts/CurrencyContext';

type ProducCardProps = {
  product: Product;
};

const ProductCard: FC<ProducCardProps> = ({ product: { images, metal, name, price, specs, slug, category: type } }) => {
  const { currency } = useContext(CurrencyContext);

  const imageUrl = images[0]?.fullSize;
  return (
    <Box
      role={'group'}
      p={6}
      maxW={{ sm: '330px' }}
      w={'full'}
      bg={useColorModeValue(COLORS.PRODUCTS_PAGE_LIGHT, COLORS.PRODUCTS_PAGE_DARK)}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}>
      <Box
        rounded={'lg'}
        mt={-12}
        pos={'relative'}
        height={'230px'}
        // _after={{
        //   transition: 'all .3s ease',
        //   content: '""',
        //   w: 'full',
        //   h: 'full',
        //   pos: 'absolute',
        //   top: 5,
        //   left: 0,
        //   backgroundImage: `url(${imageUrl})`,
        //   filter: 'blur(15px)',
        //   zIndex: -1,
        // }}
        // _groupHover={{
        //   _after: {
        //     filter: 'blur(20px)',
        //   },
        // }}
      >
        <NavLink to={`${slug}`}>
          <Image rounded={'lg'} objectFit={'cover'} src={imageUrl} />
        </NavLink>
      </Box>
      <Box pt={6}>
        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          {type}
        </Text>
        <NavLink to={`${slug}`}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {name}
          </Heading>
        </NavLink>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={'center'}
          pt={3}
          gap={3}>
          <NavLink to={`${slug}`}>
            <Text fontWeight={800} fontSize={'xl'}>
              {`${price} ${currency.symbol}`}
            </Text>
          </NavLink>
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
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
