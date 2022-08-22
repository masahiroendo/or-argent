import { useContext, useEffect, useState } from 'react';

import { OpenHighLowClose, MetalsAPIOHLCResponse } from '../constants/apiResponses';
import { makeMetalPricesApiOHLCEndpoint } from '../constants/endpoints';
import { CurrencyContext } from '../contexts/CurrencyContext';

const useOhlc = (metal: string) => {
  const [data, setData] = useState<OpenHighLowClose>({ close: 0, high: 0, low: 0, open: 0 });
  const [error, setError] = useState<Error | null>(null);
  const { currency } = useContext(CurrencyContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(makeMetalPricesApiOHLCEndpoint(metal, currency.iso));
        const json = (await response.json()) as MetalsAPIOHLCResponse;
        setData(json.rates);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchData();
  }, [currency.iso, metal]);

  return { data, error };
};

export default useOhlc;
