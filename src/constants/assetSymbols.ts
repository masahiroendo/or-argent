type AssetSymbol = {
  name: string;
  symbol: string;
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
  palladium: {
    name: 'palladium',
    symbol: 'XPD',
  },
  PLATINUM: {
    name: 'Platinum',
    symbol: 'XPT',
  },
});

export const selectMetalSymbol = (name: string): string | undefined => {
  const asset = Object.values(ASSET_SYMBOLS).find((asset) => {
    return asset.name.toLowerCase() === name.toLowerCase();
  });

  return asset?.symbol;
};
