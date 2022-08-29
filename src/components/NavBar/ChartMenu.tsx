import { useTranslation } from 'react-i18next';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { HStack, Menu, MenuButton, MenuList, VStack } from '@chakra-ui/react';

import SimpleLink from './SimpleLink';
import { ROUTES } from '../../router/constant';
import useToggle from '../../hooks/use-toggle';

const ChartMenu = () => {
  const { t } = useTranslation('navbar');
  const { opened, toggle } = useToggle();

  return (
    <Menu onOpen={toggle} onClose={toggle}>
      <MenuButton>
        {t('chart.title')}
        {opened ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList boxSize="xs">
        <HStack spacing={6} p={4} alignItems="flex-start">
          <VStack alignItems="flex-start">
            <SimpleLink to={`${ROUTES.CHART}/gold`} content={t('chart.gold.price.price')} upperCased={true} />
            <SimpleLink to={`${ROUTES.CHART}/gold/live`} content={t('chart.gold.price.live')} />
            <SimpleLink to={`${ROUTES.CHART}/gold/historical`} content={t('chart.gold.price.historical')} />
          </VStack>
          <VStack alignItems="flex-start">
            <SimpleLink to={`${ROUTES.CHART}/silver`} content={t('chart.silver.price.price')} upperCased={true} />
            <SimpleLink to={`${ROUTES.CHART}/silver/live`} content={t('chart.silver.price.live')} />
            <SimpleLink to={`${ROUTES.CHART}/silver/historical`} content={t('chart.silver.price.historical')} />
          </VStack>
          <VStack alignItems="flex-start">
            <SimpleLink to={`${ROUTES.CHART}/ratio`} content={t('chart.ratio.ratio')} upperCased={true} />
            <SimpleLink to={`${ROUTES.CHART}/ratio/gold-silver`} content={t('chart.ratio.gold-silver')} />
          </VStack>
        </HStack>
      </MenuList>
    </Menu>
  );
};

export default ChartMenu;
