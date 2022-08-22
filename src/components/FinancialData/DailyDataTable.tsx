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
import { FC, ReactNode, useContext } from 'react';

import { COLORS } from '../../theme/colors';
import GoldSymbolIcon from '../../components/icons/GoldSymbolIcon';
import SilverSymbolIcon from '../icons/SilverSymbolIcon';
import PalladiumSymbolIcon from '../../components/icons/PalladiumSymbolIcon';
import PlatinumSymbolIcon from '../../components/icons/PlatinumSymbolIcon';
import useOhlc, { UseOHLCDataType } from '../../hooks/use-ohlc';
import { ASSET_SYMBOLS } from '../../constants/assetSymbols';
import { CurrencyContext } from '../../contexts/CurrencyContext';

type TableRowProps = {
  data: UseOHLCDataType;
  currencySymbol: string;
  MetalSymbolAndLabel: ReactNode;
  error: Error | null;
};

const TableRow: FC<TableRowProps> = ({
  currencySymbol,
  data: { open, close, variation },
  MetalSymbolAndLabel,
  error,
}) => {
  return (
    <Tr>
      <Td>
        <Flex justifyContent="start" alignItems="center">
          {MetalSymbolAndLabel}
        </Flex>
      </Td>
      <Td>{!error ? ` ${open.toFixed(2)} ${currencySymbol}` : 'N-A'}</Td>
      <Td>{!error ? ` ${close.toFixed(2)} ${currencySymbol}` : 'N-A'}</Td>
      <Td>
        {<StatArrow type={variation >= 0 ? 'increase' : 'decrease'} />}
        {!error ? ` ${variation.toPrecision(2)}%` : 'N-A'}
      </Td>
    </Tr>
  );
};

const DailyDataTable = () => {
  const { t } = useTranslation();
  const bgColor = useColorModeValue('silver.300', COLORS.DARK);
  const { data: goldData, error: goldError } = useOhlc(ASSET_SYMBOLS.GOLD.symbol);
  const { data: silverData, error: silverError } = useOhlc(ASSET_SYMBOLS.SILVER.symbol);
  const { data: platinumData, error: platinumError } = useOhlc(ASSET_SYMBOLS.PLATINUM.symbol);
  const { data: palladiumData, error: palladiumError } = useOhlc(ASSET_SYMBOLS.PALLADIUM.symbol);
  const { currency } = useContext(CurrencyContext);
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
          <TableRow
            data={goldData}
            currencySymbol={currency.symbol}
            MetalSymbolAndLabel={
              <>
                <GoldSymbolIcon w="36px" h="36px" /> {t('gold')}
              </>
            }
            error={goldError}
          />
          <TableRow
            data={silverData}
            currencySymbol={currency.symbol}
            MetalSymbolAndLabel={
              <>
                <SilverSymbolIcon w="36px" h="36px" /> {t('silver')}
              </>
            }
            error={silverError}
          />
          <TableRow
            data={platinumData}
            currencySymbol={currency.symbol}
            MetalSymbolAndLabel={
              <>
                <PlatinumSymbolIcon w="36px" h="36px" /> {t('platinum')}
              </>
            }
            error={platinumError}
          />
          <TableRow
            data={palladiumData}
            currencySymbol={currency.symbol}
            MetalSymbolAndLabel={
              <>
                <PalladiumSymbolIcon w="36px" h="36px" /> {t('palladium')}
              </>
            }
            error={palladiumError}
          />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DailyDataTable;
