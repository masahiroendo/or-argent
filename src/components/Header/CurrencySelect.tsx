import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

const currencies = ['EUR', 'USD', 'CHF', 'JPY', 'GBP', 'RUB', 'CNY', 'INR', 'BRL', 'ZAR'];

const CurrencySelect: FC = () => {
  const { t } = useTranslation();
  const [curr, setCurr] = useState('EUR');

  const small = useBreakpointValue({ base: true, md: false });
  return (
    <Menu>
      <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
        {small ? curr : `${t('currency')} (${curr})`}
      </MenuButton>
      <MenuList>
        {currencies.map((curr) => (
          <MenuItem onClick={() => setCurr(curr)} key={curr}>
            {curr}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CurrencySelect;
