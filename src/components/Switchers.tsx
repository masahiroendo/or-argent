import { FC } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import CurrencySelect from './Header/CurrencySelect';
import LanguageSelect from './Header/LanguageSelect';
import { ThemeSwitchBtn } from './Header/themeSwitchBtn';
import { buttonHover } from './Header/styles';

import styles from './Header/style.module.scss';

const Switchers: FC = () => {
  const { t } = useTranslation();

  return (
    <ButtonGroup p={1} display="flex" flexDirection={{ base: 'column', sm: 'row' }}>
      <NavLink to="contact" className={({ isActive }) => (isActive ? styles.active : undefined)}>
        <Button _active={buttonHover} _hover={buttonHover} variant="ghost">
          {t('contact')}
        </Button>
      </NavLink>
      <LanguageSelect />
      <CurrencySelect />
      <ThemeSwitchBtn />
    </ButtonGroup>
  );
};

export default Switchers;
