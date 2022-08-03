import { createContext, FC, PropsWithChildren, useState } from 'react';

type CurrencyContextType = {
  currency: {
    symbol: string;
    rate: number;
  };
  change: (newSymbol: string) => void;
};

export const CurrencyContext = createContext<CurrencyContextType>(undefined!);

export const CurrencyProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [symbol, setSymbol] = useState('EUR');

  const value: CurrencyContextType = {
    currency: {
      symbol,
      rate: 0.5,
    },
    change: (newSymbol: string) => {
      setSymbol(newSymbol);
    },
  };

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};
