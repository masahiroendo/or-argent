import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import ProductCard from './ProductCard';
import { storeProducts, Product } from '../../constants/products';

const Products: FC<{}> = () => {
  const { search } = useLocation();
  const location = useLocation();

  console.log(location);
  // TODO: use below searchParams to apply filters (true or false for checkbox).
  //   const searchedMetal = new URLSearchParams(search).get('metal');
  //   const searchedType = new URLSearchParams(search).get('type');

  return (
    <>
      {storeProducts.map((p: Product) => (
        <ProductCard product={p} key={p.id} />
      ))}
    </>
  );
};

export default Products;
