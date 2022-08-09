import { Container, HStack } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import NavigationItems from './NavigationItems';

type Props = {};

const DesktopMenu = (props: Props) => {
  const { t } = useTranslation('navbar');
  return (
    <>
      <Container maxW="container.xl">
        <HStack spacing={6} justifyContent="center">
          <NavigationItems translateFn={t} />
        </HStack>
      </Container>
    </>
  );
};

export default DesktopMenu;
