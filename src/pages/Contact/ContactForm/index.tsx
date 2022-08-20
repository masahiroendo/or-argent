import { FC, FormEvent, useContext } from 'react';
import {
  Box,
  Center,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

import ContactLinks from './ContactLinks';
import GoldButton from '../../../components/buttons/GoldButton';
import { FormContext } from '../FormContext';

export type FormContent = {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormProps = {
  onSubmitCallback: (content: FormContent) => void;
};

const grids = {
  base: `
  "links"
  "form"`,
  lg: `"links form form"`,
};

const ContactForm: FC<ContactFormProps> = ({ onSubmitCallback }) => {
  const { t } = useTranslation(['translation', 'contact']);

  const {
    fields: { firstName, lastName, telephone, email, subject, message },
  } = useContext(FormContext);

  let formIsValid = false;

  if (
    firstName.isValid &&
    lastName.isValid &&
    telephone.isValid &&
    email.isValid &&
    subject.isValid &&
    message.isValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    onSubmitCallback({
      firstName: firstName.value,
      lastName: lastName.value,
      telephone: telephone.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    });
  };

  return (
    <Container maxW="container.lg" py={{ base: 2, md: 6 }}>
      <Center>
        <Heading h="h1">{t('contact-us', { ns: 'contact' })}</Heading>
      </Center>
      <Grid
        templateAreas={grids}
        templateColumns={{ md: 'repeat(1, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' }}
        gap={2}>
        <GridItem area="links">
          <ContactLinks />
        </GridItem>
        <GridItem area="form">
          <Box p={{ base: 2, lg: 10 }}>
            <form onSubmit={formSubmitHandler}>
              <Stack gap={2}>
                <Stack direction={{ base: 'column', lg: 'row' }}>
                  <FormControl isInvalid={firstName.hasError}>
                    <FormLabel htmlFor="firstName">{t('firstname')}</FormLabel>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={firstName.value}
                      onChange={firstName.valueChangeHandler}
                      onBlur={firstName.inputBlurHandler}
                    />
                    <FormErrorMessage>{t('errors.enter-firstname', { ns: 'contact' })}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={lastName.hasError}>
                    <FormLabel htmlFor="lastName">{t('lastname')}</FormLabel>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={lastName.value}
                      onChange={lastName.valueChangeHandler}
                      onBlur={lastName.inputBlurHandler}
                    />
                    <FormErrorMessage>{t('errors.enter-lastname', { ns: 'contact' })}</FormErrorMessage>
                  </FormControl>
                </Stack>
                <Stack direction={{ base: 'column', lg: 'row' }}>
                  <FormControl isInvalid={telephone.hasError}>
                    <FormLabel htmlFor="telephone">{t('phone')}</FormLabel>
                    <Input
                      type="text"
                      name="telephone"
                      id="telephone"
                      value={telephone.value}
                      onChange={telephone.valueChangeHandler}
                      onBlur={telephone.inputBlurHandler}
                    />
                    <FormErrorMessage>{t('errors.enter-phone', { ns: 'contact' })}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={email.hasError}>
                    <FormLabel htmlFor="email">{t('email')}</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={email.value}
                      onChange={email.valueChangeHandler}
                      onBlur={email.inputBlurHandler}
                    />
                    <FormErrorMessage>{t('errors.enter-email', { ns: 'contact' })}</FormErrorMessage>
                  </FormControl>
                </Stack>
                <FormControl isInvalid={subject.hasError}>
                  <FormLabel htmlFor="subject">{t('subject', { ns: 'contact' })}</FormLabel>
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject.value}
                    onChange={subject.valueChangeHandler}
                    onBlur={subject.inputBlurHandler}
                  />
                  <FormErrorMessage>{t('errors.enter-subject', { ns: 'contact' })}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={message.hasError}>
                  <FormLabel htmlFor="message">{t('message', { ns: 'contact' })}</FormLabel>
                  <Textarea
                    name="message"
                    id="message"
                    value={message.value}
                    onChange={message.valueChangeHandler}
                    onBlur={message.inputBlurHandler}
                  />
                  <FormErrorMessage>{t('errors.enter-message', { ns: 'contact' })}</FormErrorMessage>
                </FormControl>
                <Center>
                  <GoldButton disabled={!formIsValid} type="submit" leftIcon={<EmailIcon />}>
                    {t('send-message', { ns: 'contact' })}
                  </GoldButton>
                </Center>
              </Stack>
            </form>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ContactForm;
