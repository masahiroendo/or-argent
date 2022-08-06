import { createContext, FC, PropsWithChildren, useState } from 'react';

type Currency = {
  iso: string;
  symbol: string;
  // rate: number;
};

type CurrencyContextType = {
  currency: Currency;
  change: (newSymbol: string) => void;
};

export const CurrencyContext = createContext<CurrencyContextType>(undefined!);

export const currencies = [
  {
    iso: 'EUR',
    symbol: '€',
  },

  {
    iso: 'USD',
    symbol: '$',
  },

  {
    iso: 'CHF',
    symbol: 'Fr',
  },

  {
    iso: 'JPY',
    symbol: '¥',
  },

  {
    iso: 'GBP',
    symbol: '£',
  },

  {
    iso: 'RUB',
    symbol: '₽',
  },

  {
    iso: 'CNY',
    symbol: '元',
  },

  {
    iso: 'INR',
    symbol: '₹',
  },

  {
    iso: 'BRL',
    symbol: 'R$',
  },

  {
    iso: 'ZAR',
    symbol: 'R',
  },
];

export const CurrencyProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(currencies[0]);

  const value: CurrencyContextType = {
    currency,
    change: (newIso: string): void => {
      const selectedCur = currencies.find((curr) => curr.iso === newIso);
      if (!selectedCur) {
        return;
      }

      setCurrency(selectedCur);
    },
  };

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};
