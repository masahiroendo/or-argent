import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { currencies, CurrencyContext } from '../../contexts/CurrencyContext';
import { buttonHover } from './styles';

const CurrencySelect: FC = () => {
  const { t } = useTranslation();
  const { currency, change } = useContext(CurrencyContext);
  const small = useBreakpointValue({ base: true, md: false });

  return (
    <Menu>
      <MenuButton
        as={Button}
        _active={buttonHover}
        _hover={buttonHover}
        variant="ghost"
        rightIcon={<ChevronDownIcon />}>
        {small ? currency.symbol : `${t('currency')} (${currency.symbol})`}
      </MenuButton>
      <MenuList>
        {currencies.map((c) => (
          <MenuItem onClick={() => change(c.iso)} key={c.iso}>
            {c.iso}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CurrencySelect;
