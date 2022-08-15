import { ChevronDownIcon, ChevronUpIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,

  // Popover,
  // PopoverTrigger,
  // PopoverContent,
  // PopoverHeader,
  // PopoverBody,
  // PopoverFooter,
  // PopoverArrow,
  // PopoverCloseButton,
  // PopoverAnchor,
  // Portal,
} from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import useToggle from '../../hooks/use-toggle';
import { ROUTES } from '../../router/constant';
import GoldButton from '../buttons/GoldButton';
import SilverButton from '../buttons/SilverButton';
const User = () => {
  const { opened, toggle } = useToggle();
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
      <Menu variant="ghost" onOpen={toggle}>
        <MenuButton>
          <HStack spacing={0}>
            {<FiUser size={24} />}
            {opened ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </HStack>
        </MenuButton>
        <MenuList p={6} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Flex width="full">
            <Box>
              <Box textAlign="center">
                <Heading mb={4} size={'lg'}>
                  {t('user.login')}
                </Heading>
              </Box>
              <Box>
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
                  <MenuItem as={SilverButton} my={4}>
                    {t('user.create-account')}
                  </MenuItem>
                </NavLink>
              </Box>
            </Box>
          </Flex>
        </MenuList>
      </Menu>
    </>
  );
};

export default User;
