import { FC } from 'react';
import { Box, Container, Flex, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { COLORS } from '../../theme/colors';

const Line = () => {
  const color = useColorModeValue(COLORS.DARK, COLORS.GOLD);
  return <Text borderColor={color} borderWidth="1px" h={{ base: '80px', lg: 0 }} w={{ base: 0, lg: '80px' }} />;
};

const HowTo: FC = () => {
  const { t } = useTranslation(['translation', 'home']);
  const borderColor = useColorModeValue(COLORS.DARK, COLORS.GOLD);

  return (
    <Container maxW="container.lg">
      <Heading textAlign="center" py={'2em'}>
        {t('how-to-invest.title', { ns: 'home' })}
      </Heading>
      <Flex direction={{ base: 'column', lg: 'row' }} alignItems="center" gap={6}>
        <Box p={4} borderColor={borderColor} borderWidth="1px" position="relative" h="240px" w="240px">
          <Text color={borderColor} as="span" position="absolute" top="-32%" left="5px" fontSize="80px">
            1
          </Text>
          <VStack gap={3}>
            <Heading h="h3" size="lg">
              {t('how-to-invest.create-an-account.header', { ns: 'home' })}
            </Heading>
            <Text>{t('how-to-invest.create-an-account.content', { ns: 'home' })}</Text>
          </VStack>
        </Box>
        <Line />
        <Box p={4} borderColor={borderColor} borderWidth="1px" position="relative" h="240px" w="240px">
          <Text color={borderColor} as="span" position="absolute" top="-32%" left="5px" fontSize="80px">
            2
          </Text>
          <VStack gap={3}>
            <Heading h="h3" size="lg">
              {t('how-to-invest.order.header', { ns: 'home' })}
            </Heading>
            <Text>{t('how-to-invest.order.content', { ns: 'home' })}</Text>
          </VStack>
        </Box>
        <Line />
        <Box p={4} borderColor={borderColor} borderWidth="1px" position="relative" h="240px" w="240px">
          <Text color={borderColor} as="span" position="absolute" top="-32%" left="5px" fontSize="80px">
            3
          </Text>
          <VStack gap={3}>
            <Heading h="h3" size="lg">
              {t('how-to-invest.proceed-to-payment.header', { ns: 'home' })}
            </Heading>
            <Text>{t('how-to-invest.proceed-to-payment.content', { ns: 'home' })}</Text>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default HowTo;
