import { ButtonProps } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import SilverButton from './SilverButton';

const SilverIconButton: FC<PropsWithChildren<ButtonProps>> = (props) => {
  return (
    <SilverButton padding="0" borderRadius="full" {...props}>
      {props.children}
    </SilverButton>
  );
};

export default SilverIconButton;
