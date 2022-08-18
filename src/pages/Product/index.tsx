import { FC } from 'react';
import { useParams } from 'react-router-dom';

type ProductProps = {};

const Product: FC<ProductProps> = () => {
  const { slug } = useParams();

  return <div>Product page {slug}</div>;
};

export default Product;
