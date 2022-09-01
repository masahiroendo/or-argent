import { FC, useContext, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';

import { CurrencyContext } from '../../contexts/CurrencyContext';
import useCart from '../../hooks/use-cart';
import { ROUTES } from '../../router/constant';
import { Order, PAYPAL_FUNDING_SOURCE } from './types';

const options = {
  'client-id': 'AeVOJySoJ_21UqaZ13EKkAVjCYcHTmibi5n8DoXiWi2RLb89aJKXmcKzJTMLQUKlkqm2B2_BEOy3De1S',
  currency: 'EUR',
  intent: 'capture',
};

const ORDERS_KEY = 'or_argent_orders';

const PaypalCheckout: FC = () => {
  const { currency } = useContext(CurrencyContext);
  const { cartItems, cartTotal, clearCart, taxes } = useCart();
  const [fundingMethod, setFundingMethod] = useState<PAYPAL_FUNDING_SOURCE>('paypal');
  const navigate = useNavigate();

  const convertCartAndAppendToOrders = (id: string, time: string, status: string, fMethod: PAYPAL_FUNDING_SOURCE) => {
    const order: Order = {
      id,
      orderDate: time,
      status,
      total: cartTotal,
      taxes: taxes,
      articles: [...cartItems],
      paymentType: 'Paypal',
      fundingMethod: fMethod,
    };
    const parsed = localStorage.getItem(ORDERS_KEY);
    if (!parsed) {
      localStorage.setItem(ORDERS_KEY, JSON.stringify([order]));
      return;
    }

    const existingOrders = JSON.parse(parsed);
    localStorage.setItem(ORDERS_KEY, JSON.stringify([...existingOrders, order]));
    clearCart();
    navigate(`/${ROUTES.PROFILE}`);
  };

  return (
    <PayPalScriptProvider options={options}>
      <PayPalButtons
        createOrder={(data, actions) => {
          setFundingMethod(data.paymentSource);
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'OR-ARGENT.FR purchase',
                amount: {
                  currency_code: currency.iso,
                  value: cartTotal.toFixed(2),
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          actions?.order?.capture().then((details) => {
            const id = details?.id;
            const time = details?.create_time;
            const status = details?.status;
            convertCartAndAppendToOrders(id, time, status, fundingMethod);
          });
        }}
        onError={(err) => {
          // TODO: display an error toast with a message
          console.error('There was an error when trying to checkout with paypal', err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalCheckout;
