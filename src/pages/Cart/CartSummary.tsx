import { Heading, Stack, Text } from '@chakra-ui/react';
import { CgShoppingCart } from 'react-icons/cg';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { CartItem } from '../../contexts/CartContext';
import GoldButton from '../../components/buttons/GoldButton';

type CartSummaryProps = {
  items: CartItem[];
};

const CartSummary: FC<CartSummaryProps> = ({ items }) => {
  const { t } = useTranslation('cart');

  return (
    <Stack direction="column">
      <Heading as="h3" size="lg">
        {t('cart-summary')}
      </Heading>
      {items.map((item, i: number) => {
        return <Text key={`cart-items-${i}`}>{item.name} </Text>;
      })}
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
    </Stack>
  );
};

export default CartSummary;
