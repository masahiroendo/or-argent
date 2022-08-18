import { Box, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

import GoldIconButton from '../../components/buttons/GoldIconButton';
import SilverIconButton from '../../components/buttons/SilverIconButton';
import { Product } from '../../constants/products';

type ProducCardrops = {
  product: Product;
};

const ProductCard: FC<ProducCardrops> = ({
  product: {
    images,
    metal,
    name,
    price,
    spec: { weight },
    slug,
    type,
  },
}) => {
  const imageUrl = images[0]?.fullSize;
  return (
    <Box
      role={'group'}
      p={6}
      maxW={'330px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
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
        <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-between" alignItems={'center'} pt={6}>
          <NavLink to={`${slug}`}>
            <Text fontWeight={800} fontSize={'xl'}>
              {price}€-$-YEN
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
