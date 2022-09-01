import { Box, Container, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import useAuth from '../../hooks/use-auth';

const ProfileEdit = () => {
  const { t } = useTranslation(['translation', 'cart', 'navbar']);
  const { me } = useAuth();

  return (
    <Container display="flex" flexDirection="column" maxW="container.lg" gap={6}>
      <Box display="flex" flexDirection="column" gap={3}>
        <Heading>{t('personal-info', { ns: 'cart' })}</Heading>
        <Box>
          {t('user.user-name', { ns: 'navbar' })}: {me?.userName}
        </Box>
        <Box>
          {t('email')}: {me?.email}
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={3}>
        <Heading>{t('shipping-address', { ns: 'cart' })}</Heading>
        <Box>{t('street-name-number', { ns: 'cart' })}: </Box>
        <Box>{t('zip-code', { ns: 'cart' })}: </Box>
        <Box>{t('city-name', { ns: 'cart' })}: </Box>
      </Box>
    </Container>
  );
};

export default ProfileEdit;
