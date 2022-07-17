import { FC } from 'react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../router/constant';

const CallBackHeader: FC = () => {
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
          Être rappelé
        </Heading>
        <Text>
          <Link to={`/${ROUTES.CALLBACK}`}>Cliquez ici</Link>
        </Text>
      </Box>
      <Box height="80px">
        <Heading as="h2" size="md">
          Email
        </Heading>
        <Text>
          <EmailIcon />
          <a href="mailto:support@goldsilver.fr">support@goldsilver.fr</a>
        </Text>
      </Box>
      <Box height="80px">
        <Heading as="h2" size="md">
          Messagerie sécurisée
        </Heading>
        <Text>
          <FaCommentAlt style={{ display: 'unset' }} />
          <Link to={`/${ROUTES.LOGIN}`}>Cliquez ici</Link>
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default CallBackHeader;
