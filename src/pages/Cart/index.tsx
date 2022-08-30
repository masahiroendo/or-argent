import {
  Center,
  Container,
  Grid,
  GridItem,
  Icon,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { GoTrashcan } from 'react-icons/go';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../router/constant';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import useCart from '../../hooks/use-cart';
import ProductsQuantity from '../ProductDetails/ProductsQuantity';
import CartSummary from './CartSummary';
import EmptyCartIcon from './EmptyCartIcon';

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
  const { currency } = useContext(CurrencyContext);

  const { cartItems, removeFromCart, updateCartItem } = useCart();

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

  const subTotal = (p: number, q: number, curr: string): string => {
    return `${curr}` + (q * p).toFixed(2);
  };

  return (
    <Container maxW="8xl">
      <Grid
        templateAreas={grids}
        templateColumns={{
          md: 'repeat(1, minmax(0, 1fr))',
          lg: 'repeat(5, minmax(0, 1fr))',
          xl: 'repeat(4, minmax(0, 1fr))',
        }}
        gap={6}>
        <GridItem area="products">
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>{t('articles-table-headers.picture')}</Th>
                  <Th>{t('articles-table-headers.name')}</Th>
                  <Th>{t('articles-table-headers.price')}</Th>
                  <Th>{t('articles-table-headers.quantity')}</Th>
                  <Th>{t('articles-table-headers.modify')}</Th>
                  <Th>{t('articles-table-headers.sub-total')}</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {cartItems.map((ci, idx: number) => {
                  return (
                    <Tr key={`cart-items-${idx}`}>
                      <Td>
                        <Image src={ci.image} />
                      </Td>
                      <Td>{ci.name}</Td>
                      <Td>{ci.price}</Td>
                      <Td>x {ci.quantity}</Td>
                      <Td>
                        <ProductsQuantity
                          quantity={ci.quantity || 0}
                          updateQuantity={(q: number) => {
                            console.log('updatecartitems called with', ci.id, q);
                            updateCartItem(ci.id, q);
                          }}
                        />
                      </Td>
                      <Td>{subTotal(ci.price, ci.quantity || 0, currency.symbol)} </Td>
                      <Td>
                        <Icon as={GoTrashcan} cursor="pointer" onClick={() => removeFromCart(ci.id)} />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
        <GridItem area="summary">
          <CartSummary items={cartItems} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CartPage;
