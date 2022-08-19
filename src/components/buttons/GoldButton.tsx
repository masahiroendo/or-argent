import { ButtonProps } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import MetalButton from './MetalButton';

const GoldButton: FC<PropsWithChildren<ButtonProps>> = (props) => {
  return (
    <MetalButton
      borderColor="gold.700"
      _hover={{ backgroundColor: 'rgba(240, 215, 165, 0.5)' }}
      _focus={{ boxShadow: '0 0 0 3px rgba(240, 215, 165, 0.5)' }}
      {...props}>
      {props.children}
    </MetalButton>
  );
};

export default GoldButton;
