import { useEffect, useRef } from 'react';
import { Checkbox, Container, FormControl, FormLabel, Heading, HStack, Input, Select, VStack } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../router/constant';
import GoldButton from '../components/buttons/GoldButton';
import useAuth from '../hooks/use-auth';

const CreateAccount = () => {
  const firstNameRef = useRef<HTMLLabelElement | null>(null);
  const { t } = useTranslation(['translation', 'navbar']);
  const navigate = useNavigate();
  const { /*signIn,*/ signedIn } = useAuth();

  const handleSubmit = async () => {
    // await signIn();
    navigate(`/${ROUTES.UNDER_CONSTRUCTION}`, { replace: true });
  };

  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);

  if (signedIn) {
    return <Navigate to={`/${ROUTES.PROFILE}`} replace />;
  }

  return (
    <Container py={{ base: 2, md: 6 }}>
      <Heading my={10}>{t('register-form')}</Heading>
      <form onSubmit={handleSubmit}>
        <VStack>
          <FormControl w={['50%', 'full']} isRequired>
            <FormLabel htmlFor="gender">{t('gender.gender')}</FormLabel>
            <Select id="gender" placeholder={t('gender.select-your-gender')}>
              <option>{t('gender.male')}</option>
              <option>{t('gender.female')}</option>
            </Select>
          </FormControl>
          <HStack w="100%">
            <FormControl isRequired>
              <FormLabel ref={firstNameRef} htmlFor="FirstName">
                {t('firstname', { ns: 'translation' })}
              </FormLabel>
              <Input id="FirstName" placeholder="Please enter your Firstname" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="LastName">{t('lastname', { ns: 'translation' })} </FormLabel>
              <Input id="LastName" placeholder="Please enter your Lastname" />
            </FormControl>
          </HStack>
          <FormControl isRequired>
            <FormLabel htmlFor="UserName">{t('user.user-name', { ns: 'navbar' })} </FormLabel>
            <Input id="UserName" placeholder="Please enter a User Name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">{t('user.email', { ns: 'navbar' })} </FormLabel>
            <Input id="email" placeholder="Please enter your email address" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Password">Password</FormLabel>
            <Input id="password" type="password" placeholder="Password" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
            <Input id="ConfirmPassword" placeholder="Confirm password" />
          </FormControl>
          <Checkbox>{t('agree-terms-and-conditions')}</Checkbox>
          <GoldButton type="submit">{t('create-account')}</GoldButton>
        </VStack>
      </form>
    </Container>
  );
};

export default CreateAccount;
