import { Box, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {};

const Footer: FC<Props> = () => {
  const footerBg = useColorModeValue('#f0d7a5', '#191F22');
  return (
    <footer>
      <Box bg={footerBg} p={4}>
        Pied de nez
      </Box>
    </footer>
  );
};

export default Footer;
