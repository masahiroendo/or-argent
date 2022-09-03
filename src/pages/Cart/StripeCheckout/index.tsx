import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';

import useCart from '../../../hooks/use-cart';
import { CurrencyContext } from '../../../contexts/CurrencyContext';
import { CREATE_PAYPENT_INTENT_ENDPOINT, getStripe, STRIPE_AMOUNT_MULTIPLIER } from './stripe-helpers';
import StripeCheckoutForm from './StripeCheckoutForm';

const StripeCheckout = () => {
  const [clientSecret, setClientSecret] = useState('');
  const { cartTotal } = useCart();
  const { currency } = useContext(CurrencyContext);
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    const run = async () => {
      const paymentIntentResponse = await fetch(CREATE_PAYPENT_INTENT_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({
          amount: cartTotal * STRIPE_AMOUNT_MULTIPLIER,
          currency: currency.iso,
          statement_descriptor: 'Achat sur or-argent.fr',
          payment_method_types: ['card'],
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { error, clientSecret } = await paymentIntentResponse.json();
      if (error) {
        setApiError(error.message);
        return;
      }
      setClientSecret(clientSecret);
    };

    run();
  }, [cartTotal, currency.iso]);

  if (apiError !== '') {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Your payment failed!</AlertTitle>
        <AlertDescription>Verify that your card number or CVC are correct.</AlertDescription>
      </Alert>
    );
  }
  return (
    <>
      {!!clientSecret && (
        <Elements stripe={getStripe()} options={{ clientSecret }}>
          <StripeCheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default StripeCheckout;
