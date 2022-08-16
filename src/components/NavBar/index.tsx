import { FC } from 'react';
import { Collapse, Container, Hide, IconButton, Image, Show, Stack, useDisclosure } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { CgShoppingCart } from 'react-icons/cg';

import { NavLink } from 'react-router-dom';
import NavigationItems from './NavigationItems';
import SimpleLink from './SimpleLink';
import SignIn from './SignIn';
import { ROUTES } from '../../router/constant';

const NavBar: FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <header>
      <nav>
        <Container display="flex" justifyContent={{ md: 'center' }} alignItems="center" maxW="container.xl" gap={5}>
          <NavLink to={ROUTES.HOME}>
            <Image boxSize="70px" objectFit="cover" src="/assets/images/logo-shape.png" alt="or argent logo" />
          </NavLink>
          <Show above="md">
            <NavigationItems />
          </Show>
          {/* <Spacer display={{ md: 'auto' }} /> */}
          <Stack flex={{ base: 1, md: 0 }} alignItems="center" justify={'flex-end'} direction={'row'} spacing={6}>
            <SignIn />
            <SimpleLink to={ROUTES.CART}>{<CgShoppingCart fontSize={24} />}</SimpleLink>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Stack>
        </Container>
        <Hide above="md">
          <Collapse in={isOpen} animateOpacity>
            <NavigationItems />
          </Collapse>
        </Hide>
      </nav>
    </header>
  );
};

export default NavBar;
