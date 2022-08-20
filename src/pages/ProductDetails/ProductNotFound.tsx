import { Center, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import GoldButton from '../../components/buttons/GoldButton';
import { ROUTES } from '../../router/constant';
import ProductNotFoundIcon from './ProductNotFoundIcon';

const ProductNotFound = () => {
  const { t } = useTranslation(['translation', 'products']);
  return (
    <Center p={16} flexDirection="column" gap={6}>
      <Heading as="h2">{t('not-found', { ns: 'products' })}</Heading>
      <NavLink to={`/${ROUTES.PRODUCTS}`}>
        <GoldButton>{t('go-back-to-products-page', { ns: 'products' })}</GoldButton>
      </NavLink>
      <ProductNotFoundIcon boxSize={'2xl'} />
    </Center>
  );
};

export default ProductNotFound;
