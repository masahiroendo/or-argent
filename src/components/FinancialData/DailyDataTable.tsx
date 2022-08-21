import {
  Flex,
  StatArrow,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { COLORS } from '../../theme/colors';
import GoldSymbolIcon from '../../components/icons/GoldSymbolIcon';
import SilverSymbolIcon from '../icons/SilverSymbolIcon';
import PalladiumSymbolIcon from '../../components/icons/PalladiumSymbolIcon';
import PlatinumSymbolIcon from '../../components/icons/PlatinumSymbolIcon';

const DailyDataTable = () => {
  const { t } = useTranslation();
  const bgColor = useColorModeValue('silver.300', COLORS.DARK);
  const tableSize = useBreakpointValue(
    {
      base: '',
      sm: 'sm',
      md: 'md',
    },
    'md',
  );

  return (
    <TableContainer>
      <Table size={tableSize} variant="unstyled" border-collapse="collapse" bg={bgColor}>
        <TableCaption>{t('live-price.header', { ns: 'home' })}</TableCaption>
        <Thead>
          <Tr>
            <Th>{t('metal')}</Th>
            <Th>{t('open')}</Th>
            <Th>{t('spot')}</Th>
            <Th>{t('performance')}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex justifyContent="start" alignItems="center">
                <GoldSymbolIcon w="36px" h="36px" /> {t('gold')}
              </Flex>
            </Td>
            <Td>€1,738.94</Td>
            <Td>€1,741.65</Td>
            <Td>
              <StatArrow type="increase" />
              0,00%
            </Td>
          </Tr>
        </Tbody>
        <Tbody>
          <Tr>
            <Td>
              <Flex alignItems="center">
                <SilverSymbolIcon w="36px" h="36px" /> {t('silver')}
              </Flex>
            </Td>
            <Td>€18.94</Td>
            <Td>€18.05</Td>
            <Td>
              <StatArrow type="increase" />
              0,00%
            </Td>
          </Tr>
        </Tbody>
        <Tbody>
          <Tr>
            <Td>
              <Flex alignItems="center">
                <PalladiumSymbolIcon w="36px" h="36px" />
                {t('palladium')}
              </Flex>
            </Td>
            <Td>€2,106.00</Td>
            <Td>€2,131.00</Td>
            <Td>
              <StatArrow type="increase" />
              0,00%
            </Td>
          </Tr>
        </Tbody>
        <Tbody>
          <Tr>
            <Td>
              <Flex alignItems="center">
                <PlatinumSymbolIcon w="36px" h="36px" />
                {t('platinum')}
              </Flex>
            </Td>
            <Td>€889.94</Td>
            <Td>€898.37</Td>
            <Td>
              <StatArrow type="increase" />
              0,00%
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DailyDataTable;
