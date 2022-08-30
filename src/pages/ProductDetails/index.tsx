import { FC, useState } from 'react';
import {
  Badge,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AddToCartButton from './AddToCartButton';
import ProductNotFound from './ProductNotFound';
import ProductsImageCarousel from './ProductsImageCarousel';
import { COLORS } from '../../theme/colors';
import { Product, storeProducts } from '../../constants/products';
import RecommendedProductsCarousel from './RecommendedProductsCarousel';
import ProductPriceAndVariation from './ProductPriceAndVariation';
import ProductsQuantity from './ProductsQuantity';

const ProductDetails: FC = () => {
  const { t } = useTranslation(['translation', 'products']);
  const color = useColorModeValue(COLORS.PRODUCTS_PAGE_LIGHT, COLORS.PRODUCTS_PAGE_DARK);
  const labelColor = useColorModeValue('gold.700', 'silver.100');
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);

  if (!slug) {
    return <ProductNotFound />;
  }

  const product = storeProducts.find((unitProduct: Product): boolean => {
    return unitProduct.slug === slug;
  });

  if (!product) {
    return <ProductNotFound />;
  }

  const { category, images, description, metal, name, price, id, specs } = product;

  return (
    <>
      <Container maxW={'container.xl'}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: '1em', lg: '4em' }}>
          <ProductsImageCarousel images={images.map((i) => i.fullSize)} />
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box>
              <Heading as="h1" lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {name}
              </Heading>
              <Badge alignSelf="start" fontSize="1em">
                {category}
              </Badge>
              <ProductPriceAndVariation metal={metal} price={price} />
            </Box>
            <Stack spacing={{ base: 4, sm: 6 }} direction={'column'} divider={<StackDivider borderColor={color} />}>
              {/* <Box>
                <Heading as="h3" size="md" color={labelColor} textTransform={'uppercase'} mb={'4'}>
                  {t('details')}
                </Heading>
                <Text as="p">{description}</Text>
              </Box> */}
              <Box>
                <Heading as="h3" size="md" color={labelColor} textTransform={'uppercase'} mb={'4'}>
                  {t('details')}
                </Heading>
                <Tabs isLazy isFitted size="md" colorScheme="Gold.500">
                  <TabList>
                    <Tab color={labelColor} textTransform={'uppercase'} mb={'4'}>
                      {t('specs')}
                    </Tab>
                    <Tab color={labelColor} textTransform={'uppercase'} mb={'4'}>
                      {t('history')}
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <TableContainer>
                        <Table size="sm">
                          <Thead>
                            <Tr>
                              <Th>{`${t('gross-weight')} (gr)`}</Th>
                              <Th>{`${t('net-weight')} (gr)`}</Th>
                              <Th>{t('fineness')}</Th>
                              <Th>{`${t('dimensions')} (MM)`}</Th>
                              <Th>{`${t('country')}`}</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>{specs.grossWeight}</Td>
                              <Td>{specs.netWeight}</Td>
                              <Td>{specs.fineness}</Td>
                              <Td>{specs.dimensions}</Td>
                              <Td>{specs.country}</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </TabPanel>
                    <TabPanel>
                      <Text as="p">{description}</Text>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
              <Box>
                <Heading as="h3" size="md" color={labelColor} textTransform={'uppercase'} mb={'4'}>
                  {t('quantity')}
                </Heading>
                <ProductsQuantity quantity={quantity} updateQuantity={setQuantity} />
              </Box>
            </Stack>
            <AddToCartButton metal={metal} productId={id} quantity={quantity} />
          </Stack>
        </SimpleGrid>
      </Container>
      <Stack justifySelf={'flex-end'}>
        <Heading textAlign="center" as="h2" mb={'1em'}>
          {t('recommended-products.title')}
        </Heading>
        <RecommendedProductsCarousel metal={metal} slug={slug} />
      </Stack>
    </>
  );
};

export default ProductDetails;
