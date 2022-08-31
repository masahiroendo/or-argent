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
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { grids, columns } from './';
import GoldButton from '../../components/buttons/GoldButton';
import useAuth from '../../hooks/use-auth';
import CartSummary from './CartSummary';

const CheckOut = () => {
  const { signedIn, me } = useAuth();
  const { t } = useTranslation(['translation', 'cart']);

  const [checkoutIsValid, setCheckoutIsValid] = useState(false);

  const isFiveDigit = (value: string) => value.trim().length === 5;

  return (
    <Container my={5} maxW="8xl">
      <Grid templateAreas={grids} templateColumns={columns} gap={6}>
        <GridItem area="products" px={{ xl: '13em' }}>
          <Stack direction={'column'} gap={6}>
            <Heading>{t('personal-info')}</Heading>
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
              <FormControl isRequired>
                <FormLabel htmlFor="zipcode">{t('zip-code', { ns: 'cart' })}</FormLabel>
                <Input type="text" id="zipcode" name="zipcode" placeholder={`${t('zip-code', { ns: 'cart' })}`} />
                {!isFiveDigit && <FormErrorMessage>{t('zip-code-error-message', { ns: 'cart' })}</FormErrorMessage>}
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="city">{t('city-name', { ns: 'cart' })}</FormLabel>
                <Input type="text" id="city" name="city" placeholder={`${t('city-name', { ns: 'cart' })}`} />
              </FormControl>
            </Box>
            <Heading>{t('payment-method', { ns: 'cart' })}</Heading>
            <FormControl>
              <RadioGroup>
                <Radio value="PayPal">PayPal</Radio>
                <Radio value="Stripe">Stripe</Radio>
              </RadioGroup>
            </FormControl>
          </Stack>
        </GridItem>
        <GridItem area="summary">
          <CartSummary>
            <GoldButton isDisabled={!checkoutIsValid}>{t('payment')}</GoldButton>
          </CartSummary>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CheckOut;
