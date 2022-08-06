import { rest } from 'msw';
import { MetalsAPIOHLCResponse } from '../constants/apiResponses';
import { makeMetalPricesApiOHLCEndpoint } from '../constants/endpoints';

const AddVariation = (base: number): number => {
  const coef = (Math.random() * (Math.random() < 0.5 ? -1 : 1)) / 100;
  return base * (1 + coef);
};

const mockGoldData: MetalsAPIOHLCResponse = {
  success: true,
  timestamp: 1658175780,
  date: '2022-07-18',
  base: 'XAU',
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
  base: 'XAG',
  symbol: 'EUR',
  rates: {
    open: AddVariation(18.569178808078128),
    high: AddVariation(18.731740168163707),
    low: AddVariation(18.38340415882),
    close: AddVariation(18.423616199999838),
  },
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
