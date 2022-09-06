import { addBusinessDays, differenceInBusinessDays, format, parse } from 'date-fns';

type METAL_SYMBOLS = 'XAU' | 'XAG' | 'XPD' | 'XPT';

const FULL_DATE_FORMAT = 'yyyy-MM-dd';

const BASE_PRICES = Object.freeze({
  XAU: 1720,
  XAG: 20,
  XPD: 2000,
  XPT: 850,
});

export const generateMockTimeSeriesData = (start: string, end: string, symbol: METAL_SYMBOLS) => {
  return {
    success: true,
    timeseries: true,
    start_date: start,
    end_date: end,
    rates: generateRates(countDaysBetween(start, end), start, symbol),
  };
};

export const countDaysBetween = (start: string, end: string): number => {
  const startDate = parse(start, FULL_DATE_FORMAT, new Date());
  const endDate = parse(end, FULL_DATE_FORMAT, new Date());
  const diff = differenceInBusinessDays(addBusinessDays(endDate, 1), startDate);
  return diff + 1;
};

export const generateRates = (
  count: number,
  start: string,
  symbol: METAL_SYMBOLS,
): Record<string, Record<string, number>> => {
  const rates: Record<string, Record<string, number>> = {};
  let startDateString = start;
  let base = BASE_PRICES[symbol] as number;
  for (let i = 0; i < count; i++) {
    rates[startDateString] = {
      [symbol]: base,
    };
    base = addVariation(base);
    const parsedDate = addBusinessDays(parse(startDateString, FULL_DATE_FORMAT, new Date()), 1);
    startDateString = format(parsedDate, FULL_DATE_FORMAT);
  }

  return rates;
};

export const addVariation = (base: number): number => {
  const coef = (Math.random() * (Math.random() < 0.5 ? -1 : 1)) / 100;
  return base * (1 + coef);
};
