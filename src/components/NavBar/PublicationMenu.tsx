import { useTranslation } from 'react-i18next';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { HStack, Menu, MenuButton, MenuList, VStack } from '@chakra-ui/react';

import SimpleLink from './SimpleLink';
import { ROUTES } from '../../router/constant';
import useToggle from '../../hooks/use-toggle';

type Props = {};

const ChartMenu = (props: Props) => {
  const { t } = useTranslation('navbar');
  const { opened, toggle } = useToggle();

  return (
    <Menu onOpen={toggle} onClose={toggle}>
      <MenuButton>
        {t('publications.title')}
        {opened ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList>
        <HStack spacing={6} p={4} alignItems="flex-start">
          <VStack alignItems="flex-start">
            <SimpleLink to={`${ROUTES.PUBLICATIONS}/news`} content={t('publications.news.title')} upperCased={true} />
            <SimpleLink to={`${ROUTES.PUBLICATIONS}/news/articles`} content={t('publications.news.articles')} />
            <SimpleLink to={`${ROUTES.PUBLICATIONS}/news/videos`} content={t('publications.news.videos')} />
            <SimpleLink to={`${ROUTES.PUBLICATIONS}/news/mobile-app`} content={t('publications.news.mobile-app')} />
          </VStack>
          <VStack alignItems="flex-start">
            <SimpleLink to={`${ROUTES.PUBLICATIONS}/media`} content={t('publications.media.title')} upperCased={true} />
            <SimpleLink
              to={`${ROUTES.PUBLICATIONS}/media/press-releases`}
              content={t('publications.media.press-releases')}
            />
          </VStack>
        </HStack>
      </MenuList>
    </Menu>
  );
};

export default ChartMenu;
