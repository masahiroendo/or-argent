import { ASSET_SYMBOLS } from './assetSymbols';

const METALS_API_KEY = 'i0pbxp02q4psc8nq9rn6w8bdm9f4in19n73s8r7bq52dm67y7c4x2g458ilm';
export const metalPricesApiEndpoint = 'https://metals-api.com/api';
export const metalPricesApiLatestEndpoint = `${metalPricesApiEndpoint}/latest`;
export const metalPricesApiOHLCEndpoint = `${metalPricesApiEndpoint}/open-high-low-close/`;

export const makeMetalPricesApiOHLCEndpoint = (
  base: string = ASSET_SYMBOLS.GOLD.symbol,
  currencySymbol: string = 'EUR',
) => {
  const date = new Date().toISOString().split('T')[0];
  return `${metalPricesApiOHLCEndpoint}${date}?access_key=${METALS_API_KEY}&base=${base}&symbols=${currencySymbol}`;
};

export const goldMetalsApiOHLCEndpoint = (currencySymbol: string): string => {
  return makeMetalPricesApiOHLCEndpoint(ASSET_SYMBOLS.GOLD.symbol, currencySymbol);
};
export const silverMetalsApiOHLCEndpoint = (currencySymbol: string): string => {
  return makeMetalPricesApiOHLCEndpoint(ASSET_SYMBOLS.SILVER.symbol, currencySymbol);
};
export const palladiumMetalsApiOHLCEndpoint = (currencySymbol: string): string => {
  return makeMetalPricesApiOHLCEndpoint(ASSET_SYMBOLS.PALLADIUM.symbol, currencySymbol);
};
export const platinumApiOHLCEndpoint = (currencySymbol: string): string => {
  return makeMetalPricesApiOHLCEndpoint(ASSET_SYMBOLS.PLATINUM.symbol, currencySymbol);
};
