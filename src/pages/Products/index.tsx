import { FC } from 'react';
import { Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import ProductCard from './ProductCard';
import { storeProducts, Product } from '../../constants/products';

const grids = {
  base: `
  "filter"
  "product"
  "product"`,
  md: `
  "filter product product"
  "filter product product"
  "filter product product"`,
  lg: `
  "filter product product product"
  "filter product product product"
  "filter product product product"`,
};

const Products: FC<{}> = () => {
  const { search } = useLocation();
  const location = useLocation();

  // TODO: use below searchParams to apply filters (true or false for checkbox).
  //   const searchedMetal = new URLSearchParams(search).get('metal');
  //   const searchedType = new URLSearchParams(search).get('type');

  return (
    <Container maxW="8xl">
      <Grid
        templateAreas={grids}
        templateColumns={{ md: 'repeat(3, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }}
        gap={2}>
        <GridItem bg="tomato" area="filter">
          <Text>
            {' '}
            Tomate filter with all readio boxes Tomate filter with all readio boxes Tomate filter with all readio boxes
            Tomate filter with all readio boxes Tomate filter with all readio boxes Tomate filter with all readio boxes
            Tomate filter with all readio boxes Tomate filter with all readio boxes Tomate filter with all readio boxes
            Tomate filter with all readio boxes Tomate filter with all readio boxes Tomate filter with all readio boxes
            Tomate filter with all readio boxes Tomate filter with all readio boxes Tomate filter with all readio boxes
            Tomate filter with all readio boxes Tomate filter with all readio boxes Tomate filter with all readio boxes
          </Text>
        </GridItem>
        <GridItem area="product">
          <Grid
            gridTemplateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              xl: 'repeat(3, 1fr)',
            }}
            gap={1}>
            {storeProducts.map((p: Product) => (
              <GridItem p={7} justifySelf="center">
                <ProductCard product={p} key={p.id} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Products;
