import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CgShoppingCart } from 'react-icons/cg';
import { Container, Image, HStack } from '@chakra-ui/react';

import { ROUTES } from '../../router/constant';
import SimpleLink from './SimpleLink';
import ProductMenu from './ProductMenu';
import ChartMenu from './ChartMenu';
import PublicationMenu from './PublicationMenu';

const NavBar: FC = () => {
  const { t } = useTranslation('navbar');

  return (
    <header>
      <nav>
        <Container maxW="container.xl">
          <HStack spacing={6} justifyContent="center">
            <NavLink to={ROUTES.HOME}>
              <Image boxSize="100px" objectFit="cover" src="/assets/images/logo-shape.png" alt="or argent logo" />
            </NavLink>
            <ProductMenu />
            <SimpleLink to={ROUTES.STORING} content={t('storing.title')} />
            <SimpleLink to={ROUTES.DELIVERY} content={t('delivery.title')} />
            <SimpleLink to={ROUTES.RATES} content={t('rates.title')} />
            <ChartMenu />
            <PublicationMenu />
            <SimpleLink to={ROUTES.ABOUT_US} content={t('about.title')} />
            {/* Icon: Signup-signin */}
            <SimpleLink to={ROUTES.CART}>{<CgShoppingCart size={24} />}</SimpleLink>
          </HStack>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
