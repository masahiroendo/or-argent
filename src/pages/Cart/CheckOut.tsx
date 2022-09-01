import {
  Box,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { grids, columns } from './';
import useAuth from '../../hooks/use-auth';
import CartSummary from './CartSummary';
import PaypalCheckout from './PaypalCheckout';
import StripeCheckout from './StripeCheckout';

const zipCodeRegex = new RegExp(/^\d{5}(?:[-\s]\d{4})?$/);

const CheckOut = () => {
  const { signedIn, me } = useAuth();
  const { t } = useTranslation(['translation', 'cart']);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [zipCode, setZipcode] = useState('');

  const handleZipCodeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setZipcode(event.target.value);
  };

  // const isZipCodeInvalid = zipCode !== '' && zipCode.trim().length !== 5;
  const isZipCodeInvalid = zipCode !== '' && !zipCodeRegex.test(zipCode);

  return (
    <Container my={5} maxW="8xl">
      <Grid templateAreas={grids} templateColumns={columns} gap={6}>
        <GridItem area="products" px={{ xl: '13em' }}>
          <Stack direction={'column'} gap={6}>
            <Heading>{t('personal-info', { ns: 'cart' })}</Heading>
            <Box>
              <HStack>
                <FormControl isRequired>
                  <FormLabel htmlFor="firstname">{t('firstname')}</FormLabel>
                  <Input type="text" name="firstname" id="firstname" placeholder={`${t('firstname')}`} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="lastname">{t('lastname')}</FormLabel>
                  <Input type="text" name="lastname" id="lastname" placeholder={`${t('lastname')}`} />
                </FormControl>
              </HStack>
              <FormControl isRequired>
                <FormLabel htmlFor="email">{t('email')}</FormLabel>
                <Input type="email" id="email" name="email" placeholder={`${t('email')}`} />
              </FormControl>
            </Box>
            <Heading>{t('shipping-address', { ns: 'cart' })}</Heading>
            <Box>
              <FormControl isRequired>
                <FormLabel htmlFor="streetname">{t('street-name-number', { ns: 'cart' })}</FormLabel>
                <Input
                  type="text"
                  id="streetname"
                  name="streetname"
                  placeholder={`${t('street-name-number', { ns: 'cart' })}`}
                />
              </FormControl>
              <FormControl isRequired onChange={handleZipCodeChange} isInvalid={isZipCodeInvalid}>
                <FormLabel htmlFor="zipcode">{t('zip-code', { ns: 'cart' })}</FormLabel>
                <Input
                  value={zipCode}
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  placeholder={`${t('zip-code', { ns: 'cart' })}`}
                />
                <FormErrorMessage>{t('zip-code-error-message', { ns: 'cart' })}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="city">{t('city-name', { ns: 'cart' })}</FormLabel>
                <Input type="text" id="city" name="city" placeholder={`${t('city-name', { ns: 'cart' })}`} />
              </FormControl>
            </Box>
            <Heading>{t('payment-method', { ns: 'cart' })}</Heading>
            <FormControl>
              <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
                <Radio value="PayPal">PayPal</Radio>
                <Radio value="Stripe">Stripe</Radio>
              </RadioGroup>
            </FormControl>
          </Stack>
        </GridItem>
        <GridItem area="summary">
          <CartSummary>
            {paymentMethod === 'PayPal' ? <PaypalCheckout /> : paymentMethod === 'Stripe' ? <StripeCheckout /> : <></>}
          </CartSummary>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CheckOut;
