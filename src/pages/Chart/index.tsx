import { format, getTime, parse, startOfMonth, startOfWeek, startOfYear } from 'date-fns';
import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading } from '@chakra-ui/react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import NavigateToNotFound from '../../components/NavigateToNotFound';
import { selectMetalSymbol } from '../../constants/assetSymbols';
import { metalPricesTimeSeries } from '../../constants/endpoints';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { ASSET_SYMBOLS } from '../../constants/assetSymbols';
import { useTranslation } from 'react-i18next';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';

const ChartPage: FC = () => {
  const { metal } = useParams();
  const { t } = useTranslation();
  const [chartData, setChartData] = useState<number[][]>([]);
  const [start /*, setStart*/] = useState('2022-01-02');
  const [end /*, setEnd*/] = useState(format(new Date(), 'yyyy-MM-dd'));
  const { currency } = useContext(CurrencyContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!metal) {
          return;
        }
        const metalSymbol = ASSET_SYMBOLS[metal.toUpperCase()].symbol;
        if (!metalSymbol) {
          return;
        }
        const response = await fetch(
          `${metalPricesTimeSeries}?access_key=blabalkey&start_date=${start}&end_date=${end}&base=${currency.iso}&symbols=${metalSymbol}`,
        );
        const json = (await response.json()) as any;
        const { rates } = json;
        const ratesArray = Object.entries(rates).map((entry) => {
          const dateString = entry[0];
          const date = parse(dateString, 'yyyy-MM-dd', new Date());
          const timeStamp = getTime(date);
          const rate = entry[1] as Array<any>;
          const [, price] = Object.entries(rate).pop() as Array<any>;
          return [timeStamp, Math.round(price * 100) / 100];
        });

        setChartData(ratesArray);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [metal, start, end, currency.iso]);

  if (!metal) {
    return <NavigateToNotFound />;
  }

  const symbol = selectMetalSymbol(metal!);
  if (!symbol) {
    return <NavigateToNotFound />;
  }

  const options: Highcharts.Options = {
    yAxis: [
      {
        height: '75%',
        labels: {
          align: 'right',
          x: -3,
        },
        title: {
          text: metal,
        },
      },
    ],
    series: [
      {
        data: chartData,
        type: 'line',
        name: `${metal} price`,
        id: metal,
      },
    ],
  };

  const yearVariation = computeVariation('year', chartData);
  const monthVariation = computeVariation('month', chartData);
  const weekVariation = computeVariation('week', chartData);
  const dayVariation = computeVariation('oneDay', chartData);

  const variationColor = (rate: number): string => {
    return rate < 0 ? 'red.500' : 'green.500';
  };

  const variationIcon = (rate: number): ReactNode => {
    return rate < 0 ? <ArrowDownIcon /> : <ArrowUpIcon />;
  };

  return (
    <Container maxW="container.xl">
      <Heading textAlign="center" my={4}>
        {t(`evolution-of-metal`)}
      </Heading>
      <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
      <TableContainer my={6}>
        <Table>
          <Thead>
            <Tr>
              <Th>{t('year')}</Th>
              <Th>{t('month')}</Th>
              <Th>{t('week')}</Th>
              <Th>{t('day')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td textColor={variationScheme(yearVariation, ['red.500', 'green.500'])}>
                {variationScheme(yearVariation, [<ArrowDownIcon />, <ArrowUpIcon />])} {yearVariation.toFixed(2)}%
              </Td>
              <Td textColor={variationColor(monthVariation)}>
                {variationIcon(monthVariation)} {monthVariation.toFixed(2)}%
              </Td>
              <Td textColor={variationColor(weekVariation)}>{weekVariation.toFixed(2)}%</Td>
              <Td textColor={variationColor(dayVariation)}>{dayVariation.toFixed(2)}%</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      {/* <div>Creat an account button here</div> */}
    </Container>
  );
};

export default ChartPage;

function getTimestampByStart(start: string): number {
  const today = new Date();
  if (start === 'year') {
    return startOfYear(today).getTime();
  } else if (start === 'month') {
    return startOfMonth(today).getTime();
  } else if (start === 'week') {
    return startOfWeek(today, { weekStartsOn: 1 }).getTime();
  }

  return -1;
}

function computeVariation(start: 'oneDay' | 'week' | 'month' | 'year' = 'oneDay', data: number[][]): number {
  if (data.length < 2) {
    return 0;
  }

  const calculateVariation = (a: number, b: number): number => {
    return ((a - b) / b) * 100;
  };

  const ts = getTimestampByStart(start);
  if (ts === -1) {
    const lastPrice = data[data.length - 1][1];
    const previousPrice = data[data.length - 2][1];
    return calculateVariation(lastPrice, previousPrice);
  }

  const variations = data.filter((d) => {
    return d[0] >= ts;
  });

  if (variations.length < 1) {
    return 0;
  }

  const referenceValue = variations[0];
  const referencePrice = referenceValue[1];
  const lastIndex = variations.length - 1;
  const lastValue = variations[lastIndex];
  const lastPrice = lastValue[1];
  return calculateVariation(lastPrice, referencePrice);
}

function variationScheme<T>(rate: number, tab: T[]): T {
  return rate < 0 ? tab[0] : tab[1];
}
