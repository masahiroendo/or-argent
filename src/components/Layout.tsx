import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Footer from './Footer';
import Header from './Header';
import styles from './styles.module.scss';

const Layout: FC = () => {
  const { t } = useTranslation();

  return (
    <Flex direction="column">
      <Header />
      <main>
        <NavLink to="" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          {t('title')}
        </NavLink>
        <Outlet />
      </main>
      <Footer />
    </Flex>
  );
};

export default Layout;
