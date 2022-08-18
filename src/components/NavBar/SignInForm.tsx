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
  Link,
  useToast,
} from '@chakra-ui/react';
import { FC, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import SilverButton from '../buttons/SilverButton';
import GoldButton from '../buttons/GoldButton';
import { ROUTES } from '../../router/constant';
import useAuth from '../../hooks/use-auth';

type SignInFormProps = {
  onCloseForm: () => void;
};

const SignInForm: FC<SignInFormProps> = ({ onCloseForm }) => {
  const { t } = useTranslation('navbar');
  const { processing, signIn } = useAuth();
  const [show, setShow] = useState<boolean>(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errorToast = useToast({
    title: 'Authentication failed',
    status: 'error',
    position: 'top',
    isClosable: true,
  });
  const successToast = useToast({
    title: 'Authentication succeeded',
    status: 'success',
    position: 'top',
    isClosable: true,
  });

  const handleShowPassword = () => {
    setShow(!show);
  };

  const handleSubmitLogin = async (event: FormEvent) => {
    event.preventDefault();
    const success = await signIn(email, password);
    if (!success) {
      errorToast();
      return;
    }

    successToast();
    setUserName('');
    setEmail('');
    setPassword('');
    // and redirect to /account, which is a private route
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
        <GoldButton
          isLoading={processing}
          loadingText={t('user.please-wait')}
          type="submit"
          w={{ base: 'full', md: 'inherit' }}
          alignSelf="end"
          my={4}>
          {t('user.signin')}
        </GoldButton>
        <HStack w="full" justify="space-between">
          <Checkbox>{t('user.remember-me')}</Checkbox>
          <Link color="blue.600" w="auto">
            {t('user.forgot-password')}
          </Link>
        </HStack>
        <Box>{t('user.no-account-yet')}</Box>
      </form>
      <NavLink to={`/${ROUTES.CREATE_ACCOUNT}`} onClick={onCloseForm}>
        <SilverButton w={{ base: 'full', md: 'inherit' }} my={4}>
          {t('user.create-account')}
        </SilverButton>
      </NavLink>
    </>
  );
};

export default SignInForm;
