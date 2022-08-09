import { FC } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { TFunction } from 'react-i18next';
import { Image } from '@chakra-ui/react';

import { ROUTES } from '../../router/constant';
import ProductMenu from './ProductMenu';
import SimpleLink from './SimpleLink';
import PublicationMenu from './PublicationMenu';
import ChartMenu from './ChartMenu';

type NavigationItemsProps = {
  translateFn: TFunction;
};

const NavigationItems: FC<NavigationItemsProps> = ({ translateFn: t }) => {
  return (
    <>
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
      <SimpleLink to={ROUTES.CART}>{<CgShoppingCart size={24} />}</SimpleLink>{' '}
    </>
  );
};

export default NavigationItems;
