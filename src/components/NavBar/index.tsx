import React, { FC } from 'react';
import { HStack, Image, Show, Spacer } from '@chakra-ui/react';

import DesktopMenu from './DesktopMenu';
import ResponsiveMenu from './ResponsiveMenu';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/constant';

const NavBar: FC = () => {
  return (
    <header>
      <nav>
        <HStack>
          <NavLink to={ROUTES.HOME}>
            <Image boxSize="100px" objectFit="cover" src="/assets/images/logo-shape.png" alt="or argent logo" />
          </NavLink>
          <Show breakpoint="(min-width: 800px)">
            <DesktopMenu />
          </Show>
          <Spacer />
          <Show breakpoint="(max-width: 799px)">
            <ResponsiveMenu />
          </Show>
        </HStack>
      </nav>
    </header>
  );
};

export default NavBar;
