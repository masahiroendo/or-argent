import { Stripe, loadStripe } from '@stripe/stripe-js';

export const CREATE_PAYPENT_INTENT_ENDPOINT =
  'https://or-argent-stripe-api-b9muptbe7j7w.runkit.sh/create-payment-intent';
export const STRIPE_AMOUNT_MULTIPLIER = 100;

const STRIPE_HASH_KEY =
  'pk_test_51LdguPKJp78fCRBd2Cr7F4sUodpPs9gXAIGqUkltOPnkSOnzDGOLiFPD1768mQpaOhwftZAFSsbilWyB3uE5PBk800KWQPH4CV';

export const VISA_TEST_CARD_NUMBER = '4242424242424242';
export const MASTER_CARD_TEST_CARD_NUMBER = '5555555555554444';
export const ANOTHER_TEST_CARD_NUMBER = '4000002500003155';

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_HASH_KEY);
  }
  return stripePromise;
};
