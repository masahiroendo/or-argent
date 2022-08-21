import { FC, useContext } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AddToCartButton from './AddToCartButton';
import ProductNotFound from './ProductNotFound';
import { COLORS } from '../../theme/colors';
import { Product, storeProducts } from '../../constants/products';
import { CurrencyContext } from '../../contexts/CurrencyContext';

const ProductDetails: FC = () => {
  const { t } = useTranslation(['translation', 'products']);
  const color = useColorModeValue(COLORS.PRODUCTS_PAGE_LIGHT, COLORS.PRODUCTS_PAGE_DARK);
  const descriptionColor = useColorModeValue('gray.700', 'gray.200');
  const labelColor = useColorModeValue('gold.700', 'silver.100');
  const { slug } = useParams();
  const { currency } = useContext(CurrencyContext);

  if (!slug) {
    return <ProductNotFound />;
  }

  const product = storeProducts.find((unitProduct: Product): boolean => {
    return unitProduct.slug === slug;
  });

  if (!product) {
    return <ProductNotFound />;
  }

  const { category, images, description, metal, name, price, slug: productSlug, specs } = product;
  const firstImage = images[0];

  return (
    <Container maxW={'container.xl'}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: '1em', lg: '4em' }}>
        <Flex bgColor={color}>
          <Image
            rounded={'md'}
            src={firstImage.fullSize}
            alt={name}
            fit={'contain'}
            align={'center'}
            w={'100%'}
            maxH={{ base: '300px', lg: 'initial' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Heading as="h1" lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
            {name}
          </Heading>
          <Text color={descriptionColor} fontWeight={300} fontSize={'2xl'}>
            {`${price} ${currency.symbol}`}
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={'column'} divider={<StackDivider borderColor={color} />}>
            <Box>
              <Heading as="h3" size="md" color={labelColor} textTransform={'uppercase'} mb={'4'}>
                {t('details')}
              </Heading>
              <Text as="p">{description}</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" color={labelColor} textTransform={'uppercase'} mb={'4'}>
                {t('specs')}
              </Heading>
              <Text as="p">Put the specs in a tab system</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" color={labelColor} textTransform={'uppercase'} mb={'4'}>
                {t('quantity')}
              </Heading>
            </Box>
          </Stack>
          <AddToCartButton metal={metal} />
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductDetails;
