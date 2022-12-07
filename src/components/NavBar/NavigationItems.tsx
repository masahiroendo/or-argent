import { FC } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../../router/constant';
import ProductMenu from './ProductMenu';
import SimpleLink from './SimpleLink';
import ChartMenu from './ChartMenu';

const NavigationItems: FC = () => {
  const { t } = useTranslation('navbar');

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: 2, md: 0, lg: 4, xl: 6 }}
      alignItems="flex-start"
      pl={{ base: 6, md: 0 }}>
      <ProductMenu />
      <Text>{t('storing.title')}</Text>
      <Text>{t('delivery.title')}</Text>
      <Text>{t('rates.title')}</Text>
      <ChartMenu />
      <SimpleLink to={ROUTES.ABOUT_US} content={t('about.title')} />
    </Stack>
  );
};

export default NavigationItems;
