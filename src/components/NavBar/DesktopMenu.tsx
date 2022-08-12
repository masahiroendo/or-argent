import { HStack } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import NavigationItems from './NavigationItems';

type Props = {};

const DesktopMenu = (props: Props) => {
  const { t } = useTranslation('navbar');
  return (
    <HStack gap={10} justifyContent="center">
      <NavigationItems translateFn={t} />
    </HStack>
  );
};

export default DesktopMenu;
