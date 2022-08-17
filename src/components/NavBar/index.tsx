import { FC } from 'react';
import { Collapse, Container, Hide, HStack, IconButton, Image, Show, Stack, useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { CgShoppingCart } from 'react-icons/cg';

import { NavLink } from 'react-router-dom';
import NavigationItems from './NavigationItems';
import SimpleLink from './SimpleLink';
import { ROUTES } from '../../router/constant';
import { FiUser } from 'react-icons/fi';
import SignInForm from './SignInForm';

const NavBar: FC = () => {
  const { isOpen: burgerOpened, onOpen: onOpenBurger, onClose: onCloseBurger } = useDisclosure();
  const { isOpen: signInFormOpened, onOpen: onOpenSignInForm, onClose: onCloseSignInForm } = useDisclosure();

  return (
    <header>
      <nav>
        <Container display="flex" justifyContent={{ md: 'center' }} alignItems="center" maxW="container.2xl" gap={5}>
          <NavLink to={ROUTES.HOME}>
            <Image boxSize="70px" objectFit="cover" src="/assets/images/logo-shape.png" alt="or argent logo" />
          </NavLink>
          <Show above="md">
            <NavigationItems />
          </Show>
          <Stack flex={{ base: 1, md: 0 }} alignItems="center" justify={'flex-end'} direction={'row'} spacing={6}>
            <HStack
              cursor="pointer"
              onClick={() => {
                onCloseBurger();
                signInFormOpened ? onCloseSignInForm() : onOpenSignInForm();
              }}
              spacing={0}>
              {<FiUser size={24} />}
              {signInFormOpened ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </HStack>
            <SimpleLink to={ROUTES.CART}>{<CgShoppingCart fontSize={24} />}</SimpleLink>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={() => {
                onCloseSignInForm();
                burgerOpened ? onCloseBurger() : onOpenBurger();
              }}
              icon={burgerOpened ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Stack>
        </Container>
        <Hide above="md">
          <Collapse in={burgerOpened} animateOpacity>
            <NavigationItems />
          </Collapse>
        </Hide>
        <Collapse in={signInFormOpened} animateOpacity>
          <Container maxW={'480px'}>
            <SignInForm />
          </Container>
        </Collapse>
      </nav>
    </header>
  );
};

export default NavBar;
