import { FC, Suspense } from 'react';
import { Center, Flex, Spinner } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import TopInfoBar from './TopInfoBar';
import NavBar from './NavBar';

const CenteredSpinner: FC = () => {
  return (
    <Center h="100vh">
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
    </Center>
  );
};

const Layout: FC = () => {
  return (
    <Suspense fallback={<CenteredSpinner />}>
      <Flex direction="column">
        <TopInfoBar />
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Flex>
    </Suspense>
  );
};

export default Layout;
