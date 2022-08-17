import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FC, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../router/constant';
import GoldButton from '../buttons/GoldButton';
import SilverButton from '../buttons/SilverButton';

const SignInForm: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation('navbar');

  const handleShowPassword = () => {
    setShow(!show);
  };

  const handleSubmitLogin = (event: FormEvent) => {
    event.preventDefault();
    alert(`Email: ${email} & Password: ${password}`);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Box textAlign="center">
        <Heading mb={4} size={'lg'}>
          {t('user.login')}
        </Heading>
      </Box>
      <form onSubmit={handleSubmitLogin}>
        <FormControl mb={2}>
          <FormLabel>{t('user.user-name')}</FormLabel>
          <Input
            type="text"
            value={userName}
            placeholder={t('user.user-name')}
            onChange={(event: any) => setUserName(event.target.value)}
          />
        </FormControl>
        <FormControl isRequired mb={2}>
          <FormLabel>{t('user.email')}</FormLabel>
          <Input
            type="email"
            value={email}
            placeholder="email@email.com"
            onChange={(event: any) => setEmail(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl isRequired mb={2}>
          <FormLabel>{t('user.password')}</FormLabel>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              value={password}
              placeholder="*******"
              onChange={(event: any) => setPassword(event.currentTarget.value)}
            />
            <InputRightElement>
              <Button onMouseDown={handleShowPassword}>{show ? <ViewOffIcon /> : <ViewIcon />}</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Divider orientation="vertical" />
        <GoldButton type="submit" w={'full'} alignSelf="end" my={4}>
          {t('user.signin')}
        </GoldButton>
        <HStack w="full" justify="space-between">
          <Checkbox>{t('user.remember-me')}</Checkbox>
          <Button variant="link" colorScheme="blue" w="auto">
            {t('user.forgot-password')}
          </Button>
        </HStack>
        <Box>{t('user.no-account-yet')}</Box>
      </form>
      <NavLink to={`/${ROUTES.CREATE_ACCOUNT}`}>
        <SilverButton my={4}>{t('user.create-account')}</SilverButton>
      </NavLink>
    </>
  );
};

export default SignInForm;
