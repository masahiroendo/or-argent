import { FC } from 'react';
import { Box, Container, Flex, Heading, Link } from '@chakra-ui/react';
import { FaPlayCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../router/constant';
import GoldButton from '../../components/buttons/GoldButton';
import SilverButton from '../../components/buttons/SilverButton';
import useAuth from '../../hooks/use-auth';

const Hero: FC = () => {
  const { t } = useTranslation(['translation', 'home']);
  const { signedIn } = useAuth();

  return (
    <Container p={{ base: '2em', lg: '6em' }} maxW="container.lg">
      <Heading as="h1" fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }} mb={'1em'}>
        {t('title', { ns: 'home' })}
      </Heading>
      <Box>{t('description', { ns: 'home' })}</Box>
      <Flex my={'2em'} gap={{ base: 4, sm: 2 }} direction={{ base: 'column', sm: 'row' }}>
        {!signedIn && (
          <NavLink to={`/${ROUTES.CREATE_ACCOUNT}`}>
            <GoldButton>{t('create-account')}</GoldButton>
          </NavLink>
        )}
        <Link color="Silver.400" href="https://rumble.com/user/RadioQuebec" target="_blank">
          <SilverButton leftIcon={<FaPlayCircle />}>{t('watch-a-demo')}</SilverButton>
        </Link>
      </Flex>
    </Container>
  );
};

export default Hero;
