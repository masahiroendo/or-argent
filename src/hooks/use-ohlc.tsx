import { useContext, useEffect, useState } from 'react';

import { OpenHighLowClose, MetalsAPIOHLCResponse } from '../constants/apiResponses';
import { MetalSymbol } from '../constants/assetSymbols';
import { makeMetalPricesApiOHLCEndpoint } from '../constants/endpoints';
import { CurrencyContext } from '../contexts/CurrencyContext';
import { calculateVariation } from '../utils/math-utils';

export type UseOHLCDataType = OpenHighLowClose & { variation: number };

const useOhlc = (metal: MetalSymbol) => {
  const [data, setData] = useState<UseOHLCDataType>({ close: 0, high: 0, low: 0, open: 0, variation: 0 });
  const [error, setError] = useState<Error | null>(null);
  const { currency } = useContext(CurrencyContext);

  useEffect(() => {
    if (metal === 'UNDEFINED') {
      setError(Error("Cannot fetch data for symbol = 'UNDEFINED'"));
    }
  }, [metal]);

  useEffect(() => {
    if (error !== null) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(makeMetalPricesApiOHLCEndpoint(metal, currency.iso));
        const json = (await response.json()) as MetalsAPIOHLCResponse;
        const { close, high, low, open } = json.rates;
        const updatedData: UseOHLCDataType = { open, close, high, low, variation: calculateVariation(close, open) };
        setData(updatedData);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchData();
  }, [currency.iso, metal, error]);

  return { data, error };
};

export type UserOHLCType = ReturnType<typeof useOhlc>;

export default useOhlc;
