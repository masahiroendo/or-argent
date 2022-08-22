export type MetalSymbol = 'XAU' | 'XAG' | 'XPT' | 'XPD' | 'UNDEFINED';

export type AssetSymbol = {
  name: string;
  symbol: MetalSymbol;
};

export const ASSET_SYMBOLS: Record<string, AssetSymbol> = Object.freeze({
  GOLD: {
    name: 'Gold',
    symbol: 'XAU',
  },
  SILVER: {
    name: 'Silver',
    symbol: 'XAG',
  },
  PALLADIUM: {
    name: 'Palladium',
    symbol: 'XPD',
  },
  PLATINUM: {
    name: 'Platinum',
    symbol: 'XPT',
  },
});

/**
 * Finds the symbol for a given metal name
 * @param {MetalSymbol} name A metal name, like "gold", or "silver"
 */
export const selectMetalSymbol = (name: string): MetalSymbol => {
  const asset = Object.values(ASSET_SYMBOLS).find((asset) => {
    return asset.name.toLowerCase() === name.toLowerCase();
  });

  return asset ? asset.symbol : 'UNDEFINED';
};
