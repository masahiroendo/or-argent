import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { buttonHover } from './styles';

const languages = [
  {
    code: 'fr',
    complete: 'Langue (FRA)',
    acronym: 'FRA',
  },
  {
    code: 'en',
    complete: 'Language (ENG)',
    acronym: 'ENG',
  },
  {
    code: 'jp',
    complete: '言語 (日本)',
    acronym: '日本語',
  },
];

const displaySelectedLanguageName = (languageCode: string, small: boolean | undefined): string => {
  const selectedLng = languages.find((l) => l.code === languageCode);
  if (!selectedLng) {
    return 'N-A';
  }

  return small ? selectedLng.acronym : selectedLng.complete;
};

const LanguageSelect: FC = () => {
  const { i18n } = useTranslation();
  const small = useBreakpointValue({ base: true, md: false });

  const selectedLanguage = displaySelectedLanguageName(i18n.language, small);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        _active={buttonHover}
        _hover={buttonHover}
        variant="ghost"
        rightIcon={<ChevronDownIcon />}>
        {selectedLanguage}
      </MenuButton>
      <MenuList>
        {languages.map((l) => (
          <MenuItem key={l.code} onClick={() => changeLanguage(l.code)}>
            {l.acronym}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelect;
