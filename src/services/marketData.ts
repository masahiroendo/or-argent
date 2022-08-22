import { MetalsAPIOHLCResponse } from '../constants/apiResponses';
import {
  goldMetalsApiOHLCEndpoint,
  palladiumMetalsApiOHLCEndpoint,
  platinumApiOHLCEndpoint,
  silverMetalsApiOHLCEndpoint,
} from '../constants/endpoints';

export const getGoldData = async (iso: string): Promise<MetalsAPIOHLCResponse> => {
  const response = await fetch(goldMetalsApiOHLCEndpoint(iso));
  const data = (await response.json()) as MetalsAPIOHLCResponse;
  return data;
};
export const getSilverData = async (iso: string): Promise<MetalsAPIOHLCResponse> => {
  const response = await fetch(silverMetalsApiOHLCEndpoint(iso));
  const data = (await response.json()) as MetalsAPIOHLCResponse;
  return data;
};
export const getPlatinumData = async (iso: string): Promise<MetalsAPIOHLCResponse> => {
  const response = await fetch(platinumApiOHLCEndpoint(iso));
  const data = (await response.json()) as MetalsAPIOHLCResponse;
  return data;
};
export const getPalladiumData = async (iso: string): Promise<MetalsAPIOHLCResponse> => {
  const response = await fetch(palladiumMetalsApiOHLCEndpoint(iso));
  const data = (await response.json()) as MetalsAPIOHLCResponse;
  return data;
};
