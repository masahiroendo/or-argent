import { FC } from 'react';
import { Box, Button, ButtonGroup, Container, Heading } from '@chakra-ui/react';
import { FaPlayCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Hero: FC = () => {
  const { t } = useTranslation(['translation', 'home']);

  return (
    <Container pt={'3em'} pl={{ md: '17em' }} pb={'5em'} pr={{ md: '17em' }} maxW="container.xl">
      <Heading as="h1" size="3xl" mb={'1em'}>
        {t('title', { ns: 'home' })}
      </Heading>
      <Box>{t('description', { ns: 'home' })}</Box>
      <Box>
        <ButtonGroup alignItems={'center'} my={'2em'}>
          <Button size="lg" variant="ghost" border="1px" borderColor="yellow.500" borderRadius="5em">
            {t('create-account')}
          </Button>
          <Button leftIcon={<FaPlayCircle />} size="lg" borderRadius="5em" _before={{ opacity: '85%' }}>
            {t('watch-a-demo')}
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default Hero;
