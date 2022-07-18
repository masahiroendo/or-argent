export type OpenHighLowClose = {
  open: number;
  high: number;
  low: number;
  close: number;
};

export type MetalsAPIOHLCResponse = {
  success: boolean;
  timestamp: number;
  date: string;
  base: string;
  symbol: string;
  rates: OpenHighLowClose;
  unit: string;
};
