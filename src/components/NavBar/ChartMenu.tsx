import { useTranslation } from 'react-i18next';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuItem, MenuList, VStack } from '@chakra-ui/react';

import SimpleLink from './SimpleLink';
import { ROUTES } from '../../router/constant';
import useToggle from '../../hooks/use-toggle';

const ChartMenu = () => {
  const { t } = useTranslation('navbar');
  const { opened, toggle } = useToggle();

  return (
    <Menu variant="outline" onOpen={toggle} onClose={toggle}>
      <MenuButton>
        {t('chart.title')}
        {opened ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList>
        <VStack /*spacing={2} p={4}*/ alignItems="flex-start">
          <MenuItem>
            <SimpleLink to={`${ROUTES.CHART}/gold`} content={t('chart.gold.price.price')} upperCased={true} />
          </MenuItem>
          <MenuItem>
            <SimpleLink to={`${ROUTES.CHART}/silver`} content={t('chart.silver.price.price')} upperCased={true} />
          </MenuItem>
          <MenuItem>
            <SimpleLink to={`${ROUTES.CHART}/ratio/gold-silver`} content={t('chart.ratio.gold-silver')} />
          </MenuItem>
        </VStack>
      </MenuList>
    </Menu>
  );
};

export default ChartMenu;
