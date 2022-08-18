import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { RiHandCoinLine, RiSafe2Fill } from 'react-icons/ri';
import { FiRepeat } from 'react-icons/fi';
import { FaUserTie } from 'react-icons/fa';

import GoldButton from '../../components/buttons/GoldButton';
import { COLORS } from '../../constants/colors';
import { ROUTES } from '../../router/constant';
import SilverButton from '../../components/buttons/SilverButton';

const items = [
  {
    contentKey: 'buy-bullion',
    to: '#',
    Icon: ({ color }: { color: string }) => <RiHandCoinLine color={color} />,
  },
  {
    contentKey: 'store',
    to: '#',
    Icon: ({ color }: { color: string }) => <RiSafe2Fill color={color} />,
  },
  {
    contentKey: 'direct-ownership',
    to: '#',
    Icon: ({ color }: { color: string }) => <FaUserTie color={color} />,
  },
  {
    contentKey: 'sell-bullion',
    to: '#',
    Icon: ({ color }: { color: string }) => <FiRepeat color={color} />,
  },
];

const AboutUs = () => {
  const { t } = useTranslation(['translation', 'home']);
  const light = useColorModeValue(COLORS.GOLD, COLORS.SILVER);
  const dark = useColorModeValue(COLORS.SILVER, COLORS.GOLD);
  const { colorMode } = useColorMode();

  return (
    <Container maxW="container.lg" backgroundColor={light} my={'3em'}>
      <Heading textAlign="center" py={6} top="-50px" pos="relative">
        {t('why')}
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing="40px" px={{ base: 4, md: '20' }}>
        {items.map(({ Icon, contentKey, to }, i) => (
          <NavLink key={`${contentKey}-${i}`} to={to}>
            <Flex
              align="center"
              p={5}
              h="180px"
              borderWidth="1px"
              borderColor={dark}
              fontSize={{ base: 'auto', md: '22px', lg: '26px' }}>
              <Box fontSize={{ base: '36px', md: '42px' }}>
                <Icon color={dark} />
              </Box>
              <Text ml="1em">{t(contentKey, { ns: 'home' })}</Text>
            </Flex>
          </NavLink>
        ))}
      </SimpleGrid>
      <Center py={'3em'}>
        <NavLink to={`/${ROUTES.CREATE_ACCOUNT}`}>
          {colorMode === 'light' ? (
            <SilverButton>{t('create-account')} </SilverButton>
          ) : (
            <GoldButton>{t('create-account')} </GoldButton>
          )}
        </NavLink>
      </Center>
    </Container>
  );
};

export default AboutUs;
