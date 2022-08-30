import { Heading, List, ListIcon, ListItem, Stack } from '@chakra-ui/react';
import { CgShoppingCart } from 'react-icons/cg';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineGold } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import { CartItem } from '../../contexts/CartContext';
import GoldButton from '../../components/buttons/GoldButton';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { ROUTES } from '../../router/constant';

type CartSummaryProps = {
  items: CartItem[];
};

const CartSummary: FC<CartSummaryProps> = ({ items }) => {
  const { t } = useTranslation('cart');
  const { currency } = useContext(CurrencyContext);

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
      <NavLink to={`/${ROUTES.CART}/${ROUTES.CHECKOUT}`}>
        <GoldButton
          aria-label="Add to cart"
          rightIcon={<CgShoppingCart fontSize={30} />}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}
          w="full">
          {t('proceed-to-checkout')}
        </GoldButton>
      </NavLink>
    </Stack>
  );
};

export default CartSummary;
