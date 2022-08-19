import { FC } from 'react';
import {
  Badge,
  Checkbox,
  CheckboxGroup,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  useCheckboxGroup,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import { storeProducts } from '../../constants/products';
import { COLORS } from '../../constants/colors';
import FilteredProducts from './FilteredProducts';
import { useTranslation } from 'react-i18next';

const grids = {
  base: `
  "filter"
  "product"
  "product"`,
  lg: `
  "filter product product product"
  "filter product product product"
  "filter product product product"`,
};

const Products: FC = () => {
  const { t } = useTranslation();
  const { search } = useLocation();
  const location = useLocation();
  const { value: metals, getCheckboxProps: getMetalCheckboxProps } = useCheckboxGroup();
  const { value: categories, getCheckboxProps: getCategoryCheckboxProps } = useCheckboxGroup();

  // TODO: use below searchParams to apply filters (true or false for checkbox).
  //   const searchedMetal = new URLSearchParams(search).get('metal');
  //   const searchedType = new URLSearchParams(search).get('type');

  return (
    <Container mt={{ base: 2, lg: 20 }} maxW="8xl">
      <Grid
        templateAreas={grids}
        templateColumns={{ md: 'repeat(1, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }}
        gap={2}>
        <GridItem
          area="filter"
          bgColor={useColorModeValue(COLORS.PRODUCTS_PAGE_LIGHT, COLORS.PRODUCTS_PAGE_DARK)}
          p={6}>
          <Heading>{t('narrow-your-search')}</Heading>
          <Divider variant="solid" my={5} />
          <Badge variant="outline" fontSize={'1em'} colorScheme="yellow" p={1}>
            {t('metal')}
          </Badge>
          <VStack align="left" mt={4}>
            <CheckboxGroup>
              <Checkbox {...getMetalCheckboxProps({ value: 'gold' })}>
                <Text fontWeight="bold">{t('gold')}</Text>
              </Checkbox>
              <Checkbox {...getMetalCheckboxProps({ value: 'silver' })}>
                <Text fontWeight="bold">{t('silver')}</Text>
              </Checkbox>
              <Checkbox {...getMetalCheckboxProps({ value: 'platinum' })}>
                <Text fontWeight="bold">{t('platinum')}</Text>
              </Checkbox>
              <Checkbox {...getMetalCheckboxProps({ value: 'paladium' })}>
                <Text fontWeight="bold">{t('paladium')}</Text>
              </Checkbox>
            </CheckboxGroup>
          </VStack>
          <Divider variant="solid" my={5} />
          <Badge variant="outline" fontSize={'1em'} colorScheme="blue" p={1}>
            {t('category')}
          </Badge>
          <VStack align="left" mt={4}>
            <CheckboxGroup>
              <Checkbox {...getCategoryCheckboxProps({ value: 'bar' })}>
                <Text fontWeight="bold">{t('bar')}</Text>
              </Checkbox>
              <Checkbox {...getCategoryCheckboxProps({ value: 'coin' })}>
                <Text fontWeight="bold">{t('coin')}</Text>
              </Checkbox>
            </CheckboxGroup>
          </VStack>
        </GridItem>
        <GridItem area="product">
          <FilteredProducts products={storeProducts} metals={metals} categories={categories} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Products;
