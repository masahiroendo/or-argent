import { FC, useContext } from 'react';
import { Icon, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { GoTrashcan } from 'react-icons/go';

import { useTranslation } from 'react-i18next';
import ProductsQuantity from '../ProductDetails/ProductsQuantity';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import useCart from '../../hooks/use-cart';

const CartItemsList: FC = () => {
  const { t } = useTranslation('cart');
  const { currency } = useContext(CurrencyContext);
  const { cartItems, updateCartItem, removeFromCart } = useCart();

  const subTotal = (p: number, q: number, curr: string): string => {
    return `${curr}` + (q * p).toFixed(2);
  };

  return (
    <TableContainer>
      <Table size="sm">
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
  );
};

export default CartItemsList;
