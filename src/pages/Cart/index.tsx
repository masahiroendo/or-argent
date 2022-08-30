import { Center, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../router/constant';
import useCart from '../../hooks/use-cart';
import CartSummary from './CartSummary';
import EmptyCartIcon from './EmptyCartIcon';
import CartItemsList from './CartItemsList';

const grids = {
  base: `
  "summary"
  "products"
  `,
  lg: `
    "products products products summary summary"
  `,
  xl: `
    "products products products summary"
  `,
};

const CartPage: FC = () => {
  const { t } = useTranslation('cart');
  const { cartItems } = useCart();

  const cartIsEmpty = cartItems.length === 0;

  if (cartIsEmpty) {
    return (
      <Center h="68vh" flexDirection="column" gap={6}>
        <Text>{t('empty-cart')}</Text>
        <NavLink to={`/${ROUTES.PRODUCTS}`}>{t('to-products-page')}</NavLink>
        <EmptyCartIcon w={256} h={256} />
      </Center>
    );
  }

  return (
    <Container maxW="8xl">
      <Grid
        templateAreas={grids}
        templateColumns={{
          base: 'repeat(1, minmax(0, 1fr))',
          lg: 'repeat(5, minmax(0, 1fr))',
          xl: 'repeat(4, minmax(0, 1fr))',
        }}
        gap={6}>
        <GridItem area="products">
          <CartItemsList />
        </GridItem>
        <GridItem area="summary">
          <CartSummary items={cartItems} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CartPage;
