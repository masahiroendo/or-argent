import React, { FC } from 'react';
import { Container, HStack, Image, Show, Spacer } from '@chakra-ui/react';

import DesktopMenu from './DesktopMenu';
import ResponsiveMenu from './ResponsiveMenu';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/constant';

const NavBar: FC = () => {
  return (
    <header>
      <nav>
        <Container display="flex" justifyContent={{ base: 'space-between', md: 'center' }} maxW="container.xl">
          <NavLink to={ROUTES.HOME}>
            <Image boxSize="100px" objectFit="cover" src="/assets/images/logo-shape.png" alt="or argent logo" />
          </NavLink>
          <HStack>
            <Show above="md">
              <DesktopMenu />
            </Show>
            <Spacer />
            <Show below="md">
              <ResponsiveMenu />
            </Show>
          </HStack>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
