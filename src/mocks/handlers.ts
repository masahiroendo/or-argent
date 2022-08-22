import { rest } from 'msw';

import { MetalsAPIOHLCResponse } from '../constants/apiResponses';
import { makeMetalPricesApiOHLCEndpoint } from '../constants/endpoints';
import { ASSET_SYMBOLS } from '../constants/assetSymbols';

const AddVariation = (base: number): number => {
  const coef = (Math.random() * (Math.random() < 0.5 ? -1 : 1)) / 100;
  return base * (1 + coef);
};

const mockGoldData: MetalsAPIOHLCResponse = {
  success: true,
  timestamp: 1658175780,
  date: '2022-07-18',
  base: ASSET_SYMBOLS.GOLD.symbol,
  symbol: 'EUR',
  rates: {
    open: AddVariation(1693.798718342352),
    high: AddVariation(1701.6143690000101),
    low: AddVariation(1681.2250673059823),
    close: AddVariation(1684.288868735463),
  },
  unit: 'per ounce',
};
const mockSilverData: MetalsAPIOHLCResponse = {
  success: true,
  timestamp: 1658175836,
  date: '2022-07-18',
  base: ASSET_SYMBOLS.SILVER.symbol,
  symbol: 'EUR',
  rates: {
    open: AddVariation(18.569178808078128),
    high: AddVariation(18.731740168163707),
    low: AddVariation(18.38340415882),
    close: AddVariation(18.423616199999838),
  },
  unit: 'per ounce',
};

const mockPlatinumData = {
  success: true,
  timestamp: 1658175780,
  date: '2022-07-18',
  base: ASSET_SYMBOLS.PLATINUM.symbol,
  symbol: 'EUR',
  rates: {
    open: AddVariation(894.5151),
    high: AddVariation(868.8545),
    low: AddVariation(895.9507),
    close: AddVariation(873.1459),
  },
  unit: 'per ounce',
};
const mockPalladiumData = {
  success: true,
  timestamp: 1658175780,
  date: '2022-07-18',
  base: ASSET_SYMBOLS.PALLADIUM.symbol,
  symbol: 'EUR',
  rates: {
    open: AddVariation(2154.77),
    high: AddVariation(2155.5),
    low: AddVariation(2102.0),
    close: AddVariation(2124.02),
  },
  unit: 'per ounce',
};
export const handlers = [
  rest.get(makeMetalPricesApiOHLCEndpoint(), (req, res, ctx) => {
    switch (req.url.searchParams.get('base')) {
      case ASSET_SYMBOLS.GOLD.symbol:
        return res(ctx.json(mockGoldData));
      case ASSET_SYMBOLS.SILVER.symbol:
        return res(ctx.json(mockSilverData));
      case ASSET_SYMBOLS.PLATINUM.symbol:
        return res(ctx.json(mockPlatinumData));
      case ASSET_SYMBOLS.PALLADIUM.symbol:
        return res(ctx.json(mockPalladiumData));
      default:
        throw Error('no data found from OHLW endpoint');
    }
  }),
];
