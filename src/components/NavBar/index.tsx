import { FC, useRef } from 'react';
import {
  Box,
  Collapse,
  Container,
  Hide,
  HStack,
  IconButton,
  Image,
  Show,
  Stack,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { CgShoppingCart } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

import NavigationItems from './NavigationItems';
import SimpleLink from './SimpleLink';
import { ROUTES } from '../../router/constant';
import SignInForm from './SignInForm';

const NavBar: FC = () => {
  const signInFormRef = useRef<HTMLDivElement>(null);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: signInFormRef,
    handler: () => {
      onCloseSignInForm();
    },
  });
  useOutsideClick({
    ref: burgerMenuRef,
    handler: () => {
      onCloseBurger();
    },
  });
  const { isOpen: burgerOpened, onOpen: onOpenBurger, onClose: onCloseBurger } = useDisclosure();
  const { isOpen: signInFormOpened, onOpen: onOpenSignInForm, onClose: onCloseSignInForm } = useDisclosure();

  const handleUserIconClick = () => {
    onCloseBurger();
    signInFormOpened ? onCloseSignInForm() : onOpenSignInForm();
  };
  const handleBurgerIconClick = () => {
    onCloseSignInForm();
    burgerOpened ? onCloseBurger() : onOpenBurger();
  };

  return (
    <header>
      <nav>
        <Container display="flex" justifyContent={{ md: 'center' }} alignItems="center" maxW="container.2xl" gap={5}>
          <NavLink to={ROUTES.HOME}>
            <Image boxSize="70px" objectFit="cover" src="/assets/images/logo-shape.png" alt="or argent logo" />
          </NavLink>
          <Show above="md">
            <Box fontSize={{ md: '14px', lg: '16px', xl: '18px' }}>
              <NavigationItems />
            </Box>
          </Show>
          <Stack flex={{ base: 1, md: 0 }} alignItems="center" justify={'flex-end'} direction={'row'} spacing={6}>
            <HStack cursor="pointer" onClick={handleUserIconClick} spacing={0}>
              {<FiUser size={24} />}
              {signInFormOpened ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </HStack>
            <SimpleLink to={ROUTES.CART}>{<CgShoppingCart fontSize={24} />}</SimpleLink>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={handleBurgerIconClick}
              icon={burgerOpened ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Stack>
        </Container>
        <Hide above="md">
          <Collapse in={burgerOpened} animateOpacity ref={burgerMenuRef}>
            <NavigationItems />
          </Collapse>
        </Hide>
        <Collapse in={signInFormOpened} animateOpacity ref={signInFormRef}>
          <Container maxW={'480px'}>
            <SignInForm onCloseForm={onCloseSignInForm} />
          </Container>
        </Collapse>
      </nav>
    </header>
  );
};

export default NavBar;
