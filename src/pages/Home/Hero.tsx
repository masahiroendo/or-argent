import { FC } from 'react';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { FaPlayCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/constant';
import GoldButton from '../../components/buttons/GoldButton';
import SilverButton from '../../components/buttons/SilverButton';

const Hero: FC = () => {
  const { t } = useTranslation(['translation', 'home']);

  return (
    <Container py={'3em'} px={{ md: '10em', lg: '17em' }} maxW="container.xl">
      <Heading as="h1" size="3xl" mb={'1em'}>
        {t('title', { ns: 'home' })}
      </Heading>
      <Box>{t('description', { ns: 'home' })}</Box>
      <Flex my={'2em'} gap={{ base: 4, sm: 2 }} direction={{ base: 'column', sm: 'row' }}>
        <NavLink to={`/${ROUTES.CREATE_ACCOUNT}`}>
          <GoldButton>{t('create-account')}</GoldButton>
        </NavLink>
        <SilverButton leftIcon={<FaPlayCircle />} _before={{ opacity: '85%' }}>
          {t('watch-a-demo')}
        </SilverButton>
      </Flex>
    </Container>
  );
};

export default Hero;
