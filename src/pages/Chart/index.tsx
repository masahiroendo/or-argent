import { format, getTime, parse, startOfMonth, startOfWeek, startOfYear } from 'date-fns';
import { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Container, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

import NavigateToNotFound from '../../components/NavigateToNotFound';
import { selectMetalSymbol } from '../../constants/assetSymbols';
import { metalPricesTimeSeries } from '../../constants/endpoints';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { ASSET_SYMBOLS } from '../../constants/assetSymbols';
import { useTranslation } from 'react-i18next';

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

  return (
    <Container maxW="container.xl">
      <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>{t('year')}</Th>
              {/* <Th>{t('semester')}</Th>
              <Th>{t('trimester')}</Th> */}
              <Th>{t('month')}</Th>
              <Th>{t('week')}</Th>
              <Th>{t('today')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{computeVariation('year', chartData).toFixed(2)}%</Td>
              <Td>{computeVariation('month', chartData).toFixed(2)}%</Td>
              <Td>{computeVariation('week', chartData).toFixed(2)}%</Td>
              <Td>{computeVariation('today', chartData).toFixed(2)}%</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
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

function computeVariation(start: 'today' | 'week' | 'month' | 'year' = 'today', data: number[][]): number {
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
