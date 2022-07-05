import { FC } from 'react';
import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

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
      </Box>
      <Box height="80px">
        <Heading as="h2" size="md">
          Email
        </Heading>
      </Box>
      <Box height="80px">
        <Heading as="h2" size="md">
          Messagerie sécurisée
        </Heading>
      </Box>
    </SimpleGrid>
  );
};

export default CallBackHeader;
