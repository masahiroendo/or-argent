import { Container, Icon, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { GoTrashcan } from 'react-icons/go';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { CurrencyContext } from '../../contexts/CurrencyContext';
import useCart from '../../hooks/use-cart';
import ProductsQuantity from '../ProductDetails/ProductsQuantity';

const CartPage: FC = () => {
  const { t } = useTranslation();
  const { currency } = useContext(CurrencyContext);

  const { cartItems, removeFromCart, updateCartItem } = useCart();

  const subTotal = (p: number, q: number, curr: string): string => {
    return `${curr}` + (q * p).toFixed(2);
  };

  return (
    <Container maxW="container.xl">
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>{t('picture')}</Th>
              <Th>{t('name')}</Th>
              <Th>{t('price')}</Th>
              <Th>{t('quantity')}</Th>
              <Th>{t('modify')}</Th>
              <Th>{t('sub-total')}</Th>
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
    </Container>
  );
};

export default CartPage;
