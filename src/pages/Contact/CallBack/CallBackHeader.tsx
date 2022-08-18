import { FC } from 'react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../../../router/constant';

const CallBackHeader: FC = () => {
  const { t } = useTranslation(['translation', 'contact']);
  return (
    <SimpleGrid columns={[1, 2, 4]} spacing="20px">
      <Box height="80px">
        <Heading as="h2" size="md">
          Téléphone
        </Heading>
        <Text>
          <PhoneIcon />
          <a href="tel:++33142410445">+33-1-4241-0445</a>
        </Text>
      </Box>
      <Box height="80px">
        <Heading as="h2" size="md">
          {t('to-be-called-back', { ns: 'contact' })}
        </Heading>
        <Text>
          <Link to={`/${ROUTES.CALLBACK}`}>{t('click-here')}</Link>
        </Text>
      </Box>
      <Box height="80px">
        <Heading as="h2" size="md">
          {t('email')}
        </Heading>
        <Text>
          <EmailIcon />
          <a href="mailto:support@goldsilver.fr">support@goldsilver.fr</a>
        </Text>
      </Box>
      <Box height="80px">
        <Heading as="h2" size="md">
          {t('secured-messaging', { ns: 'contact' })}
        </Heading>
        <Text>
          <FaCommentAlt style={{ display: 'unset' }} />
          <Link to={`/${ROUTES.LOGIN}`}>{t('click-here')}</Link>
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default CallBackHeader;
