import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';

const Layout: FC = () => {
  return (
    <Flex direction="column">
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Flex>
  );
};

export default Layout;
