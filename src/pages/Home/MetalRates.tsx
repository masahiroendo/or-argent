import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import DailyDataTable from '../../components/FinancialData/DailyDataTable';

const MetalsRates: FC = () => {
  const { t } = useTranslation(['home']);

  return (
    <Container maxW="container.lg" my={'3em'}>
      <Heading textAlign="center" py={'2em'}>
        {t('live-price.header', { ns: 'home' })}
      </Heading>
      <Flex flexDirection={{ base: 'column-reverse', lg: 'row' }} gap={4}>
        <Stack spacing={8} flex={1}>
          <Box borderLeftWidth="2px" borderStyle="solid" borderColor="#f0d7a5" display="block" pl="8px" pb="4px">
            <Heading h="h3" size="md">
              {t('live-price.header1', { ns: 'home' })}
            </Heading>
            <Text>{t('live-price.content1', { ns: 'home' })}</Text>
          </Box>
          <Box borderLeftWidth="2px" borderStyle="solid" borderColor="#f0d7a5" display="block" pl="8px" pb="4px">
            <Heading h="h3" size="md">
              {t('live-price.header2', { ns: 'home' })}
            </Heading>
            <Text>{t('live-price.content2', { ns: 'home' })}</Text>
          </Box>
          <Box borderLeftWidth="2px" borderStyle="solid" borderColor="#f0d7a5" display="block" pl="8px" pb="4px">
            <Heading h="h3" size="md">
              {t('live-price.header3', { ns: 'home' })}
            </Heading>
            <Text>{t('live-price.content3', { ns: 'home' })}</Text>
          </Box>
          <Box borderLeftWidth="2px" borderStyle="solid" borderColor="#f0d7a5" display="block" pl="8px" pb="4px">
            <Heading h="h3" size="md">
              {t('live-price.header4', { ns: 'home' })}
            </Heading>
            <Text>{t('live-price.content4', { ns: 'home' })}</Text>
          </Box>
        </Stack>
        <Stack flex={1}>
          <DailyDataTable />
        </Stack>
      </Flex>
    </Container>
  );
};

export default MetalsRates;
