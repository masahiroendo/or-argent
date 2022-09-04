import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NavigateToNotFound from '../components/NavigateToNotFound';
import { selectMetalSymbol } from '../constants/assetSymbols';

const MetalPage: FC = () => {
  const { metal } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://metals-api.com/api/timeseries?access_key=blabalkey&start_date=2022-08-01&end_date=2022-09-03&base=EUR&symbols=XAU',
        );
        const json = (await response.json()) as any;
        console.log('json data', json);
      } catch (err) {}
    };
    fetchData();
  }, []);

  if (!metal) {
    return <NavigateToNotFound />;
  }

  const symbol = selectMetalSymbol(metal!);
  if (!symbol) {
    return <NavigateToNotFound />;
  }

  return (
    <div>
      <p>This is a dynamic page for {metal}</p>
      <p>Symbol is: {symbol}</p>
    </div>
  );
};

export default MetalPage;
