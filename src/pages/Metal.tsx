import { FC } from 'react';
import { useParams } from 'react-router-dom';
import NavigateToNotFound from '../components/NavigateToNotFound';
import { selectMetalSymbol } from '../constants/assetSymbols';

const MetalPage: FC = () => {
  const { metal } = useParams();
  if (!metal) {
    return <NavigateToNotFound />;
  }

  const symbol = selectMetalSymbol(metal!);
  if (!symbol) {
    return <NavigateToNotFound />;
  }

  return (
    <div>
      <p>This is a dynamic page for {metal}</p>
      <p>Symbol is: {symbol}</p>
    </div>
  );
};

export default MetalPage;
