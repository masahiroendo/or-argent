import React, { FC } from 'react';
import { Show } from '@chakra-ui/react';

import DesktopMenu from './DesktopMenu';
import ResponsiveMenu from './ResponsiveMenu';

const NavBar: FC = () => {
  return (
    <header>
      <nav>
        <Show above="md">
          <DesktopMenu />
        </Show>
        <Show below="md">
          <ResponsiveMenu />
        </Show>
      </nav>
    </header>
  );
};

export default NavBar;
