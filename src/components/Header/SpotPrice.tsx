import { FC } from "react";
import { Box } from "@chakra-ui/react";

type SpotPriceProps = {
  asset: string;
  price: number;
  symbol: string;
  openPrice: number;
};

const calculateVariation = (price: number, openPrice: number): number => {
  if (openPrice === 0) {
    return 0;
  }
  return ((price - openPrice) / openPrice) * 100;
};

const SpotPrice: FC<SpotPriceProps> = (props) => {
  return (
    <Box>
      {props.asset} {props.price}
      {props.symbol}{" "}
      {calculateVariation(props.price, props.openPrice).toPrecision(2)}%
    </Box>
  );
};

export default SpotPrice;
