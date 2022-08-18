import { Checkbox, Container, FormControl, FormLabel, Heading, HStack, Input, Select, VStack } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../router/constant';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import GoldButton from '../components/buttons/GoldButton';

type Props = {};

const CreateAccount = (props: Props) => {
  const firstNameRef = useRef<HTMLLabelElement | null>(null);
  const { t } = useTranslation(['translation', 'navbar']);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${ROUTES.UNDER_CONSTRUCTION}`, { replace: true });
  };

  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);

  return (
    <Container py={6}>
      <Heading my={10}>{t('register-form')}</Heading>
      <form>
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
            <FormLabel htmlFor="Password">Password</FormLabel>
            <Input id="password" type="password" placeholder="Password" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
            <Input id="ConfirmPassword" placeholder="Confirm password" />
          </FormControl>
          <Checkbox>{t('agree-terms-and-conditions')}</Checkbox>
          <GoldButton onClick={handleNavigate}>{t('create-account')}</GoldButton>
        </VStack>
      </form>
    </Container>
  );
};

export default CreateAccount;
