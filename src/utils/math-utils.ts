export const calculateVariation = (closePrice: number, openPrice: number): number => {
  if (openPrice === 0) {
    return 0;
  }
  return ((closePrice - openPrice) / openPrice) * 100;
};
