import { FC } from "react";

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
    <span>
      {props.asset} {props.price}
      {props.symbol}{" "}
      {calculateVariation(props.price, props.openPrice).toPrecision(2)}%
    </span>
  );
};

export default SpotPrice;
