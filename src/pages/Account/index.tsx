import { Container, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import Orders from './Orders';
import Profile from './Profile';

const Account = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="container.lg">
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab _selected={{ color: 'gold.700', boxShadow: '0 0 0 3px rgba(229, 186, 99, 0.6)' }}>{t('account')} </Tab>
          <Tab _selected={{ color: 'gold.700', boxShadow: '0 0 0 3px rgba(229, 186, 99, 0.6)' }}>{t('orders')} </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <Orders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Account;
