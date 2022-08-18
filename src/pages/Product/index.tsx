import { FC } from 'react';
import { useParams } from 'react-router-dom';

type ProductProps = {};

const Product: FC<ProductProps> = () => {
  const { name } = useParams();

  return <div>Product page {name}</div>;
};

export default Product;
