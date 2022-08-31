import { Heading, List, ListIcon, ListItem, Stack } from '@chakra-ui/react';
import { FC, PropsWithChildren, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineGold } from 'react-icons/ai';

import { CurrencyContext } from '../../contexts/CurrencyContext';
import useCart from '../../hooks/use-cart';

const CartSummary: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { t } = useTranslation('cart');
  const { currency } = useContext(CurrencyContext);
  const { cartItems: items } = useCart();

  const cartTotal: number = items.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const taxes = cartTotal * (1 - 1 / 1.2);

  return (
    <Stack direction="column" gap={4}>
      <Heading as="h3" size="lg">
        {t('cart-summary')}
      </Heading>
      <List spacing={3}>
        {items.map((item, i: number) => {
          return (
            <ListItem key={`cart-items-${i}`}>
              <ListIcon as={AiOutlineGold} color="gold.700" />
              {item.name}
            </ListItem>
          );
        })}
      </List>
      <Heading as="h4" size="sm">
        {t('taxes')}: {currency.symbol} {taxes.toFixed(2)}
      </Heading>
      <Heading as="h4" size="sm">
        {t('grand-total')}: {currency.symbol} {cartTotal}
      </Heading>
      {children}
    </Stack>
  );
};

export default CartSummary;
