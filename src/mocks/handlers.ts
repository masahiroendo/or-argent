import { rest } from 'msw';

import { MetalsAPIOHLCResponse } from '../constants/apiResponses';
import { makeMetalPricesApiOHLCEndpoint, metalPricesTimeSeries } from '../constants/endpoints';
import { ASSET_SYMBOLS } from '../constants/assetSymbols';
import { addVariation, generateMockTimeSeriesData } from './generators';

const mockGoldData: MetalsAPIOHLCResponse = {
  success: true,
  timestamp: 1658175780,
  date: '2022-07-18',
  base: ASSET_SYMBOLS.GOLD.symbol,
  symbol: 'EUR',
  rates: {
    open: addVariation(1693.798718342352),
    high: addVariation(1701.6143690000101),
    low: addVariation(1681.2250673059823),
    close: addVariation(1684.288868735463),
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
    open: addVariation(18.569178808078128),
    high: addVariation(18.731740168163707),
    low: addVariation(18.38340415882),
    close: addVariation(18.423616199999838),
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
    open: addVariation(894.5151),
    high: addVariation(868.8545),
    low: addVariation(895.9507),
    close: addVariation(873.1459),
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
    open: addVariation(2154.77),
    high: addVariation(2155.5),
    low: addVariation(2102.0),
    close: addVariation(2124.02),
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

  rest.get(metalPricesTimeSeries, (req, res, ctx) => {
    const symbol = req.url.searchParams.get('symbols');
    const start = req.url.searchParams.get('start_date');
    const end = req.url.searchParams.get('end_date');
    if (!start || !end) {
      throw Error('wrong start_date or end end_date parameters in query');
    }
    switch (symbol?.toUpperCase()) {
      case ASSET_SYMBOLS.GOLD.symbol:
        return res(ctx.json(generateMockTimeSeriesData(start, end, 'XAU')));
      case ASSET_SYMBOLS.SILVER.symbol:
        return res(ctx.json(generateMockTimeSeriesData(start, end, 'XAG')));
      case ASSET_SYMBOLS.PLATINUM.symbol:
        return res(ctx.json(generateMockTimeSeriesData(start, end, 'XPT')));
      case ASSET_SYMBOLS.PALLADIUM.symbol:
        return res(ctx.json(generateMockTimeSeriesData(start, end, 'XPD')));
      default:
        throw Error('no data found from timeseries endpoint');
    }
  }),
];
