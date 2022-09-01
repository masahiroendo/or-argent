import { Center, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import GoldButton from '../../components/buttons/GoldButton';
import { ROUTES } from '../../router/constant';
import useCart from '../../hooks/use-cart';
import CartSummary from './CartSummary';
import EmptyCartIcon from './EmptyCartIcon';
import CartItemsList from './CartItemsList';

export const grids = {
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

export const columns = {
  base: 'repeat(1, minmax(0, 1fr))',
  lg: 'repeat(5, minmax(0, 1fr))',
  xl: 'repeat(4, minmax(0, 1fr))',
};

const CartPage: FC = () => {
  const { t } = useTranslation(['translation', 'cart']);
  const { cartItems } = useCart();

  const cartIsEmpty = cartItems.length === 0;

  if (cartIsEmpty) {
    return (
      <Center h="68vh" flexDirection="column" gap={6}>
        <Text>{t('empty-cart', { ns: 'cart' })}</Text>
        <NavLink to={`/${ROUTES.PRODUCTS}`}>{t('to-products-page')}</NavLink>
        <EmptyCartIcon w={256} h={256} />
      </Center>
    );
  }

  return (
    <Container maxW="8xl">
      <Grid templateAreas={grids} templateColumns={columns} gap={6}>
        <GridItem area="products">
          <CartItemsList />
        </GridItem>
        <GridItem area="summary">
          <CartSummary>
            <NavLink to={`/${ROUTES.CART}/${ROUTES.CHECKOUT}`}>
              <GoldButton
                aria-label="Add to cart"
                rightIcon={<CgShoppingCart fontSize={30} />}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}
                w="full">
                {t('proceed-to-checkout', { ns: 'cart' })}
              </GoldButton>
            </NavLink>
          </CartSummary>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CartPage;
