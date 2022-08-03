import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { CurrencyContext } from '../../contexts/CurrencyContext';

const currencies = ['EUR', 'USD', 'CHF', 'JPY', 'GBP', 'RUB', 'CNY', 'INR', 'BRL', 'ZAR'];

const CurrencySelect: FC = () => {
  const { t } = useTranslation();
  const { currency, change } = useContext(CurrencyContext);
  const small = useBreakpointValue({ base: true, md: false });

  return (
    <Menu>
      <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
        {small ? currency.symbol : `${t('currency')} (${currency.symbol})`}
      </MenuButton>
      <MenuList>
        {currencies.map((c) => (
          <MenuItem onClick={() => change(c)} key={c}>
            {c}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CurrencySelect;
