import { Box, Flex, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import GoldButton from '../../components/buttons/GoldButton';
import { ROUTES } from '../../router/constant';

type Props = {};

const AboutUs = (props: Props) => {
  const { t } = useTranslation(['home', 'translation']);

  return (
    <Flex>
      <VStack>
        <HStack>
          <Box>{t('buy-bullion')} </Box>
          <Box>{t('store')} </Box>
        </HStack>
        <HStack>
          <Box>{t('direct-ownership')} </Box>
          <Box>{t('sell-bullion')} </Box>
        </HStack>
        <NavLink to={`/${ROUTES.CREATE_ACCOUNT}`}>
          <GoldButton>{t('create-account', { ns: 'translation' })} </GoldButton>
        </NavLink>
      </VStack>
    </Flex>
  );
};

export default AboutUs;
