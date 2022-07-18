const METALS_API_KEY = 'i0pbxp02q4psc8nq9rn6w8bdm9f4in19n73s8r7bq52dm67y7c4x2g458ilm';
export const metalPricesApiEndpoint = 'https://metals-api.com/api';
export const metalPricesApiLatestEndpoint = `${metalPricesApiEndpoint}/latest`;
export const metalPricesApiOHLCEndpoint = `${metalPricesApiEndpoint}/open-high-low-close/`;

export const makeMetalPricesApiOHLCEndpoint = (base: string = 'XAU', symbols: string = 'EUR') => {
  const date = new Date().toISOString().split('T')[0];
  return `${metalPricesApiEndpoint}/open-high-low-close/${date}?access_key=${METALS_API_KEY}&base=${base}&symbols=${symbols}`;
};
