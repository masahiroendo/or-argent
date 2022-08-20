import { FC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { StringOrNumber } from '@chakra-ui/utils';

import { Product } from '../../constants/products';
import ProductCard from './ProductCard';

type FilteredProductsProps = {
  products: Product[];
  metals: StringOrNumber[];
  categories: StringOrNumber[];
};

const filterByMetal = (metals: StringOrNumber[]) => (product: Product) => {
  if (metals.length === 0) {
    return true;
  }
  return metals.includes(product.metal);
};
const filterByCategory = (categories: StringOrNumber[]) => (product: Product) => {
  if (categories.length === 0) {
    return true;
  }
  return categories.includes(product.category);
};

const FilteredProducts: FC<FilteredProductsProps> = ({ products, metals, categories }) => {
  return (
    <Grid
      gridTemplateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)',
      }}
      gap={1}>
      {products
        .filter(filterByMetal(metals))
        .filter(filterByCategory(categories))
        .map((p: Product) => (
          <GridItem key={p.id} p={7} justifySelf="center">
            <ProductCard product={p} key={p.id} />
          </GridItem>
        ))}
    </Grid>
  );
};

export default FilteredProducts;
