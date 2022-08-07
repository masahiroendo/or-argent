import { useTranslation } from 'react-i18next';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { HStack, Menu, MenuButton, MenuList, VStack } from '@chakra-ui/react';

import SimpleLink from './SimpleLink';
import { ROUTES } from '../../router/constant';
import useToggle from '../../hooks/use-toggle';

const ProductMenu = () => {
  const { t } = useTranslation('navbar');
  const { opened, toggle } = useToggle();
  return (
    <Menu onOpen={toggle} onClose={toggle}>
      <MenuButton>
        {t('product-menu.title')} {opened ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList>
        <HStack spacing={6} p={4} alignItems="flex-start">
          <VStack alignItems="flex-start">
            <SimpleLink to={`${ROUTES.METAL}/gold`} content={t('product-menu.gold.buy-all')} upperCased={true} />
            <SimpleLink to={`${ROUTES.METAL}/gold/bars`} content={t('product-menu.gold.buy-bars')} />
            <SimpleLink to={`${ROUTES.METAL}/gold/coins`} content={t('product-menu.gold.buy-coins')} />
          </VStack>
          <VStack alignItems="flex-start">
            <SimpleLink to={`${ROUTES.METAL}/silver`} content={t('product-menu.silver.buy-all')} upperCased={true} />
            <SimpleLink to={`${ROUTES.METAL}/silver/bars`} content={t('product-menu.silver.buy-bars')} />
            <SimpleLink to={`${ROUTES.METAL}/silver/coins`} content={t('product-menu.silver.buy-coins')} />
          </VStack>
        </HStack>
      </MenuList>
    </Menu>
  );
};

export default ProductMenu;
