import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout: FC = () => {
  return (
    <Flex direction="column">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Flex>
  );
};

export default Layout;
