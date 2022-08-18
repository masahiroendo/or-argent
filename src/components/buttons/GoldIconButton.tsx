import { ButtonProps } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import GoldButton from './GoldButton';

const GoldIconButton: FC<PropsWithChildren<ButtonProps>> = (props) => {
  return (
    <GoldButton padding="0" borderRadius="full" {...props}>
      {props.children}
    </GoldButton>
  );
};

export default GoldIconButton;
