import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { FormEvent } from 'react';
import { Box, Code, Heading, Link, IconButton, useClipboard, Text, Kbd, useToast } from '@chakra-ui/react';
import { RiFileCopyLine, RiVisaFill, RiSecurePaymentFill } from 'react-icons/ri';
import { FaCcMastercard } from 'react-icons/fa';

import { ANOTHER_TEST_CARD_NUMBER, MASTER_CARD_TEST_CARD_NUMBER, VISA_TEST_CARD_NUMBER } from './stripe-helpers';
import GoldButton from '../../../components/buttons/GoldButton';
import { ROUTES } from '../../../router/constant';

const StripeCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { onCopy: onCopyVisa } = useClipboard(VISA_TEST_CARD_NUMBER);
  const { onCopy: onCopyMaster } = useClipboard(MASTER_CARD_TEST_CARD_NUMBER);
  const { onCopy: onCopyAnother } = useClipboard(ANOTHER_TEST_CARD_NUMBER);

  const copyToast = useToast({
    title: 'Card number copied in your clipboard!',
    status: 'info',
    position: 'top',
    isClosable: true,
    description: (
      <>
        <Kbd color="blackAlpha.700">cmd</Kbd>+<Kbd color="blackAlpha.700">v</Kbd> on mac or{' '}
        <Kbd color="blackAlpha.700">ctrl</Kbd>+<Kbd color="blackAlpha.700">v</Kbd> on pc
      </>
    ),
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/${ROUTES.STRIPE_PAYMENT_CONFIRMED}`,
      },
    });

    if (error !== null) {
      alert(`The payment failed\n Reason: ${error.message}`);
      return;
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={4}>
          <PaymentElement />
          <GoldButton type="submit" disabled={!stripe || !elements}>
            Pay with Stripe
          </GoldButton>
        </Box>
      </form>
      <Heading as="h4" size="md">
        Try a{' '}
        <Link href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">
          test card
        </Link>
        :
      </Heading>
      <Box display="flex" flexDirection="column" gap={3}>
        <Box display="flex" alignItems="center" gap={6}>
          <RiVisaFill />
          <Code>{VISA_TEST_CARD_NUMBER}</Code>
          <IconButton
            onClick={() => {
              copyToast();
              onCopyVisa();
            }}
            aria-label="stripe-payment-visa"
            icon={<RiFileCopyLine />}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={6}>
          <FaCcMastercard />
          <Code>{MASTER_CARD_TEST_CARD_NUMBER}</Code>
          <IconButton
            onClick={() => {
              copyToast();
              onCopyMaster();
            }}
            aria-label="stripe-payment-master"
            icon={<RiFileCopyLine />}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={6}>
          <RiSecurePaymentFill />
          <Code>{ANOTHER_TEST_CARD_NUMBER}</Code>{' '}
          <IconButton
            onClick={() => {
              copyToast();
              onCopyAnother();
            }}
            aria-label="stripe-payment-another"
            icon={<RiFileCopyLine />}
          />
          <Text>
            (Requires
            <Link href="https://www.youtube.com/watch?v=2kc-FjU2-mY" target="_blank" rel="noopener noreferrer">
              3DSecure
            </Link>
            )
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default StripeCheckoutForm;
