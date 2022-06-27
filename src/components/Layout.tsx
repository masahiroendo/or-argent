import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import styles from './styles.module.scss';

const Layout: FC = () => {
  return (
    <Flex direction="column">
      <Header />
      <main>
        <NavLink to="" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          GOLD and SILVER
        </NavLink>
        <Outlet />
      </main>
      <Footer />
    </Flex>
  );
};

export default Layout;
