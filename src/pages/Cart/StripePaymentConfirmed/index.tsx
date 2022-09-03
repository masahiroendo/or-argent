import { Center, Container, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import useCart from '../../../hooks/use-cart';
import useOrders from '../../../hooks/use-orders';
import { Order } from '../../Cart/types';
import { ROUTES } from '../../../router/constant';
import StripeCardPaymentIcon from './StripeCardPaymentIcon';

const StripePaymentConfirmed = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const paymentIntent = new URLSearchParams(search).get('payment_intent');
  const clientSecret = new URLSearchParams(search).get('payment_intent_client_secret');
  const status = new URLSearchParams(search).get('redirect_status');
  const { t } = useTranslation();
  const { cartItems, cartTotal, clearCart, taxes } = useCart();
  const { addOrder } = useOrders();

  const isCartEmpty = !cartItems.length;
  const hasNotStripeReturnUrlParams = !paymentIntent && !clientSecret && !status && status !== 'succeeded';

  useEffect(() => {
    if (isCartEmpty || hasNotStripeReturnUrlParams) {
      return navigate(`/${ROUTES.NOT_FOUND}`, { replace: true });
    }

    const order: Order = {
      id: uuidv4(),
      orderDate: new Date().toISOString(),
      status: 'success',
      total: cartTotal,
      taxes: taxes,
      articles: [...cartItems],
      paymentType: 'Stripe',
      fundingMethod: 'stripe-card',
    };

    addOrder(order);
    clearCart();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Center h="68vh" flexDirection="column" gap={6}>
        <Text>{t('payment-confirmed')}</Text>
        <NavLink to={`/${ROUTES.PROFILE}`}>{t('to-my-account')}</NavLink>
        <StripeCardPaymentIcon w={256} h={256} />
      </Center>
    </Container>
  );
};

export default StripePaymentConfirmed;
