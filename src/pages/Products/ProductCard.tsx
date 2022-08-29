import { Box, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { COLORS } from '../../theme/colors';
import { CarouselItemType } from '../../constants/products';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { ROUTES } from '../../router/constant';
import AddSingleItemToCartButton from '../../components/buttons/AddSingleItemToCartButton';

type ProducCardProps = {
  product: CarouselItemType;
};

const ProductCard: FC<ProducCardProps> = ({ product: { id, image, metal, name, price, slug, category: type } }) => {
  const { currency } = useContext(CurrencyContext);

  return (
    <Box
      role={'group'}
      p={6}
      maxW={{ sm: '330px' }}
      bg={useColorModeValue(COLORS.PRODUCTS_PAGE_LIGHT, COLORS.PRODUCTS_PAGE_DARK)}
      w={'xs'}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}>
      <Box
        rounded={'lg'}
        mt={-12}
        mb={{ base: '1em', sm: '3em' }}
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
        <NavLink to={`/${ROUTES.PRODUCTS}/${slug}`}>
          <Image rounded={'lg'} objectFit={'cover'} src={image} />
        </NavLink>
      </Box>
      <Box pt={6}>
        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          {type}
        </Text>
        <NavLink to={`/${ROUTES.PRODUCTS}/${slug}`}>
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
          <AddSingleItemToCartButton metal={metal} id={id} />
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
