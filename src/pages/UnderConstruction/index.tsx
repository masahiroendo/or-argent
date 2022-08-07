import { Center, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import UnderConstructionImg from './UnderConstructionImg';

import style from './style.module.scss';

const UnderConstruction: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={style.container}>
      <Heading as="h1" size="xl" noOfLines={1} pb={4}>
        {t('page-is-under-construction')}
      </Heading>
      <Center>
        <UnderConstructionImg />
      </Center>
    </div>
  );
};

export default UnderConstruction;
