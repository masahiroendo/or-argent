import { FC, PropsWithChildren } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  IconButton,
  Kbd,
  Link,
  Stack,
  Text,
  useClipboard,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import { BsFillShareFill } from 'react-icons/bs';

import json from '../../../package.json';
import GoldLingotIcon from '../../components/icons/GoldLingotIcon';
import Switchers from '../../components/Switchers';
import { COLORS } from '../../theme/colors';

type FooterButtonProps = { label: string; href: string; onClick?: () => void; target?: string };

const FooterButton: FC<PropsWithChildren<FooterButtonProps>> = ({ children, label, href, onClick, target = '' }) => {
  return (
    <Button
      bg="#334D5C"
      onClick={onClick}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={target}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      size="full"
      _hover={{ bg: 'gray.700' }}>
      {children}
    </Button>
  );
};

const Footer: FC = () => {
  const { onCopy } = useClipboard(json.homepage);
  const bg = useColorModeValue(COLORS.GOLD, COLORS.DARK);
  const iconColor = useColorModeValue(COLORS.SILVER, COLORS.GOLD);
  const copyToast = useToast({
    title: 'Site URL Copied!',
    status: 'success',
    position: 'top',
    isClosable: true,
    description: (
      <>
        You can now paste {json.homepage} in your favorite sns app with <Kbd color="blackAlpha.700">cmd</Kbd>+
        <Kbd color="blackAlpha.700">v</Kbd> on mac or <Kbd color="blackAlpha.700">ctrl</Kbd>+
        <Kbd color="blackAlpha.700">v</Kbd> on pc
      </>
    ),
  });

  const handleCopyButtonClick = () => {
    onCopy();
    copyToast();
  };

  return (
    <footer style={{ backgroundColor: bg, paddingTop: '12px' }}>
      <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
        <Box display="flex" gap={4}>
          <GoldLingotIcon fontSize={'2xl'} /> Official {json.name.toLocaleUpperCase()} App
        </Box>
        <VStack>
          <Text>
            Site powered with{' '}
            <Link href="https://reactjs.org/" target="_blank">
              React JS v18.0.8
            </Link>
          </Text>
          <Text>
            and{' '}
            <Link href="https://chakra-ui.com/" target="_blank">
              Chakra-ui
            </Link>{' '}
            components library
          </Text>
          <Switchers />
        </VStack>
      </Container>
      <Divider />
      <Container
        as={Stack}
        maxW={'3xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© {new Date().getFullYear()} All rights not reserved</Text>
        <HStack spacing={6}>
          <FooterButton label={'Github repository'} href={json.url} target="_blank">
            <VscGithub color={'white'} />
          </FooterButton>
          <IconButton
            bg="#334D5C"
            _hover={{ bg: 'gray.700' }}
            aria-label={`Share ${json.name} site url with others`}
            rounded="full"
            onClick={handleCopyButtonClick}
            transition={'background 0.3s ease'}
            icon={<BsFillShareFill color={iconColor} />}
          />
        </HStack>
      </Container>
    </footer>
  );
};

export default Footer;
