import { Box, HStack, VStack, Text, useColorModeValue } from '@chakra-ui/react';
import { EmailIcon, Icon, PhoneIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import { FaCommentAlt, FaFacebook, FaLinkedinIn, FaTelegram } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../../../router/constant';
import { COLORS } from '../../../constants/colors';

const ContactLinks: FC = () => {
  const { t } = useTranslation(['translation', 'contact']);
  const bg = useColorModeValue(COLORS.PRODUCTS_PAGE_LIGHT, COLORS.PRODUCTS_PAGE_DARK);

  return (
    <VStack alignItems="flex-start" p={{ base: 2, lg: 10 }} bg={bg} gap={6}>
      <HStack alignItems="flex-start" gap={2}>
        <PhoneIcon color="gold.600" w={5} h={5} />
        <VStack alignItems="flex-start">
          <Box>
            <ReactCountryFlag countryCode="FR" svg /> <a href="tel:++33142410445">+33-1-4241-0445</a>
          </Box>
          <Box>
            <ReactCountryFlag countryCode="GB" svg /> <a href="tel:++442078941234">+44-20-7894-1234</a>
          </Box>
          <Link to={`/${ROUTES.CALLBACK}`}>{t('to-be-called-back', { ns: 'contact' })}</Link>
        </VStack>
      </HStack>
      <HStack alignItems="flex-start" gap={2}>
        <EmailIcon color="gold.600" w={5} h={5} />
        <VStack alignItems="flex-start">
          <a href="mailto:support@goldsilver.fr">support@goldsilver.fr</a>
        </VStack>
      </HStack>
      <HStack alignItems="flex-start" gap={2}>
        <Icon as={IoLocationSharp} color="gold.600" w={5} h={5} />
        <VStack alignItems="flex-start">
          <Text>61 rue des Petits, 75001 Paris, France</Text>
        </VStack>
      </HStack>
      <HStack alignItems="flex-start" gap={2}>
        <Icon as={FaCommentAlt} color="gold.600" w={5} h={5} />
        <VStack alignItems="flex-start">
          <Link to={ROUTES.LOGIN}>{t('secured-messaging', { ns: 'contact' })}</Link>
        </VStack>
      </HStack>
      <HStack>
        <Link to="#">
          <Icon as={FaFacebook} color="gold.600" w={7} h={7} />
        </Link>
        <Link to="#">
          <Icon as={FaLinkedinIn} color="gold.600" w={7} h={7} />
        </Link>
        <Link to="#">
          <Icon as={FaTelegram} color="gold.600" w={7} h={7} />
        </Link>
      </HStack>
    </VStack>
  );
};

export default ContactLinks;
