import { ChevronDownIcon, ChevronUpIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
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
// import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { FormEvent, useState } from 'react';
import { FiUser } from 'react-icons/fi';

import useToggle from '../../hooks/use-toggle';

const User = () => {
  const { opened, toggle } = useToggle();
  const [show, setShow] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Menu variant="ghost" onOpen={toggle} onClose={toggle}>
        <MenuButton>
          <HStack spacing={0}>
            {<FiUser size={24} />}
            {opened ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </HStack>
        </MenuButton>
        <MenuList p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Flex width="full" align="center" justifyContent="center">
            <Box>
              <Box textAlign="center">
                <Heading size={'lg'}>Login</Heading>
              </Box>
              <Box my={4} textAlign="left">
                <form onSubmit={handleSubmitLogin}>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      variant="flushed"
                      placeholder="email@email.com"
                      onChange={(event: any) => setEmail(event.currentTarget.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={show ? 'text' : 'password'}
                        value={password}
                        variant="flushed"
                        placeholder="*******"
                        onChange={(event: any) => setPassword(event.currentTarget.value)}
                      />
                      <InputRightElement>
                        <Button onMouseDown={handleShowPassword}>{show ? <ViewOffIcon /> : <ViewIcon />}</Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Divider orientation="vertical" />
                  <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
                    Sign In
                  </Button>
                </form>
              </Box>
            </Box>
          </Flex>
        </MenuList>
      </Menu>
    </>
  );
};

export default User;
