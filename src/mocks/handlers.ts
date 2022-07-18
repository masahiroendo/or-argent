import { rest } from 'msw';
import { MetalsAPIOHLCResponse } from '../constants/apiResponses';
import { makeMetalPricesApiOHLCEndpoint } from '../constants/endpoints';

const mockGoldData: MetalsAPIOHLCResponse = {
  success: true,
  timestamp: 1658175780,
  date: '2022-07-18',
  base: 'XAU',
  symbol: 'EUR',
  rates: { open: 1693.798718342352, high: 1701.6143690000101, low: 1681.2250673059823, close: 1684.288868735463 },
  unit: 'per ounce',
};
const mockSilverData: MetalsAPIOHLCResponse = {
  success: true,
  timestamp: 1658175836,
  date: '2022-07-18',
  base: 'XAG',
  symbol: 'EUR',
  rates: { open: 18.569178808078128, high: 18.731740168163707, low: 18.38340415882, close: 18.423616199999838 },
  unit: 'per ounce',
};

export const handlers = [
  rest.get(makeMetalPricesApiOHLCEndpoint(), (req, res, ctx) => {
    switch (req.url.searchParams.get('base')) {
      case 'XAU':
        return res(ctx.json(mockGoldData));
      case 'XAG':
        return res(ctx.json(mockSilverData));
      default:
        throw Error('no data found from OHLW endpoint');
    }
  }),
];
