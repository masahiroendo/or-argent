import { Box, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

import { COLORS } from '../../constants/colors';

const Footer: FC = () => {
  const bg = useColorModeValue(COLORS.GOLD, COLORS.SILVER);
  return (
    <footer>
      <Box bg={bg} p={4}>
        Pied de nez
      </Box>
    </footer>
  );
};

export default Footer;
