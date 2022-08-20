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
            <SimpleLink
              to={`${ROUTES.PRODUCTS}?metals=gold`}
              content={t('product-menu.gold.buy-all')}
              reloadDocument={true}
              upperCased={true}
            />
            <SimpleLink
              to={`${ROUTES.PRODUCTS}?metals=gold&categories=bar`}
              content={t('product-menu.gold.buy-bars')}
              reloadDocument={true}
            />
            <SimpleLink
              to={`${ROUTES.PRODUCTS}?metals=gold&categories=coin`}
              content={t('product-menu.gold.buy-coins')}
              reloadDocument={true}
            />
          </VStack>
          <VStack alignItems="flex-start">
            <SimpleLink
              to={`${ROUTES.PRODUCTS}?metals=silver`}
              content={t('product-menu.silver.buy-all')}
              reloadDocument={true}
              upperCased={true}
            />
            <SimpleLink
              to={`${ROUTES.PRODUCTS}?metals=silver&categories=bar`}
              content={t('product-menu.silver.buy-bars')}
              reloadDocument={true}
            />
            <SimpleLink
              to={`${ROUTES.PRODUCTS}?metals=silver&categories=coin`}
              content={t('product-menu.silver.buy-coins')}
              reloadDocument={true}
            />
          </VStack>
        </HStack>
      </MenuList>
    </Menu>
  );
};

export default ProductMenu;
