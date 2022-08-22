import { FC } from 'react';
import {
  Badge,
  Checkbox,
  CheckboxGroup,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useCheckboxGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { storeProducts, Product } from '../../constants/products';
import { COLORS } from '../../theme/colors';
import FilteredProducts from './FilteredProducts';

const metalNames = ['gold', 'silver', 'platinum', 'palladium'];
const categoryNames = ['bar', 'coin'];

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

const availableMetal = (metalName: string): boolean => storeProducts.some((p) => p.metal === metalName);

//2 array method to count items
const countItems = (fieldName: keyof Product, fieldValue: string): number =>
  storeProducts.filter((p) => p[fieldName] === fieldValue).length;

const countItemsReduce = (fieldName: keyof Product, fieldValue: string): number => {
  const count = storeProducts.reduce((acc, cur) => {
    if (cur[fieldName] === fieldValue) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return count;
};

const Products: FC = () => {
  const { t } = useTranslation();
  const { search } = useLocation();
  const searchedMetals = new URLSearchParams(search).get('metals');
  const searchedCategories = new URLSearchParams(search).get('categories');
  const { value: metals, getCheckboxProps: getMetalCheckboxProps } = useCheckboxGroup({
    defaultValue: !searchedMetals ? [] : searchedMetals.split(','),
  });
  const { value: categories, getCheckboxProps: getCategoryCheckboxProps } = useCheckboxGroup({
    defaultValue: !searchedCategories ? [] : searchedCategories.split(','),
  });

  return (
    <Container p={{ base: 0, sm: '16px' }} mt={{ base: 2, lg: 20 }} maxW="8xl">
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
          <Flex wrap="wrap" direction={{ base: 'row', lg: 'column' }} align="baseline" mt={4} gap={{ base: 6, lg: 3 }}>
            <CheckboxGroup value={metals}>
              {metalNames.map((m) => (
                <Checkbox
                  key={m}
                  disabled={!availableMetal(m)}
                  {...getMetalCheckboxProps({ value: m })}
                  colorScheme="gold">
                  <Text fontWeight="bold">{`${t(m)} (${countItemsReduce('metal', m)})`}</Text>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </Flex>
          <Divider variant="solid" my={5} />
          <Badge variant="outline" fontSize={'1em'} colorScheme="blue" p={1}>
            {t('categories')}
          </Badge>
          <Flex wrap="wrap" direction={{ base: 'row', lg: 'column' }} align="baseline" mt={4} gap={{ base: 6, lg: 3 }}>
            <CheckboxGroup value={categories}>
              {categoryNames.map((c) => (
                <Checkbox key={c} {...getCategoryCheckboxProps({ value: c })} colorScheme="blue">
                  <Text fontWeight="bold">{`${t(c)} (${countItems('category', c)})`}</Text>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </Flex>
        </GridItem>
        <GridItem area="product">
          <FilteredProducts products={storeProducts} metals={metals} categories={categories} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Products;
