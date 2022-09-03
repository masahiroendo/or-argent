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
  Icon,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCcPaypal, FaCcStripe } from 'react-icons/fa';

import { grids, columns } from './';
// import useAuth from '../../hooks/use-auth';
import CartSummary from './CartSummary';
import PaypalCheckout from './PaypalCheckout';
import StripeCheckout from './StripeCheckout';

const alphabeticRegex = new RegExp(/^[A-Za-z]+$/);
const emailRegex = new RegExp(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/);
const zipCodeRegex = new RegExp(/^\d{5}(?:[-\s]\d{4})?$/);

const CheckOut = () => {
  // const { signedIn, me } = useAuth();
  const { t } = useTranslation(['translation', 'cart']);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipcode] = useState('');

  const handleZipCodeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setZipcode(event.target.value);
  };

  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  // const isZipCodeInvalid = zipCode !== '' && zipCode.trim().length !== 5;
  const isZipCodeInvalid = zipCode !== '' && !zipCodeRegex.test(zipCode);
  const isFirstNameInvalid = firstName !== '' && !alphabeticRegex.test(firstName);
  const isEmailInvalid = email !== '' && !emailRegex.test(email);

  return (
    <Container my={5} maxW="8xl">
      <Grid templateAreas={grids} templateColumns={columns} gap={6}>
        <GridItem area="products" px={{ xl: '13em' }}>
          <Stack direction={'column'} gap={6}>
            <Heading>{t('personal-info', { ns: 'cart' })}</Heading>
            <Box>
              <HStack>
                <FormControl isRequired onChange={handleFirstNameChange} isInvalid={isFirstNameInvalid}>
                  <FormLabel htmlFor="firstname">{t('firstname')}</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    name="firstname"
                    id="firstname"
                    placeholder={`${t('firstname')}`}
                  />
                  <FormErrorMessage>{t('first-name-error-message', { ns: 'cart' })} </FormErrorMessage>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="lastname">{t('lastname')}</FormLabel>
                  <Input type="text" name="lastname" id="lastname" placeholder={`${t('lastname')}`} />
                </FormControl>
              </HStack>
              <FormControl isRequired onChange={handleEmailChange} isInvalid={isEmailInvalid}>
                <FormLabel htmlFor="email">{t('email')}</FormLabel>
                <Input value={email} type="email" id="email" name="email" placeholder={`${t('email')}`} />
                <FormErrorMessage>{t('email-error-message', { ns: 'cart' })}</FormErrorMessage>
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
                <Radio value="PayPal" px={3}>
                  <Icon as={FaCcPaypal} h={8} w={8} />
                </Radio>
                <Radio value="Stripe" px={3}>
                  <Icon as={FaCcStripe} h={8} w={8} />
                </Radio>
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
