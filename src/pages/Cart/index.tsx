import { Table } from '@chakra-ui/react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import RecommendedProductsCarousel from '../ProductDetails/RecommendedProductsCarousel';

const Cart: FC = () => {
  const { slug } = useParams();

  return (
    <>
      <Table>Cart Page</Table>
      {/* <RecommendedProductsCarousel metal={metal} slug={slug} /> */}
    </>
  );
};

export default Cart;
