import { FC, useContext } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

import { CurrencyContext } from '../../contexts/CurrencyContext';
import useCart from '../../hooks/use-cart';

const options = {
  'client-id': 'AeVOJySoJ_21UqaZ13EKkAVjCYcHTmibi5n8DoXiWi2RLb89aJKXmcKzJTMLQUKlkqm2B2_BEOy3De1S',
  currency: 'EUR',
  intent: 'capture',
};

const PaypalCheckout: FC = () => {
  const { currency } = useContext(CurrencyContext);
  const { cartTotal } = useCart();

  return (
    <PayPalScriptProvider options={options}>
      <PayPalButtons
        createOrder={(data, actions) => {
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
            const name = details?.payer?.name?.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
        onError={(err) => {
          console.error('There was an error when trying to checkout with paypal', err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalCheckout;
