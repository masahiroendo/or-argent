import { ButtonProps } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import MetalButton from './MetalButton';

const GoldButton: FC<PropsWithChildren<ButtonProps>> = ({ children, _focus, _hover, ...rest }) => {
  return (
    <MetalButton
      borderColor="gold.700"
      _hover={{ backgroundColor: 'rgba(240, 215, 165, 0.5)', ..._hover }}
      _focus={{ boxShadow: '0 0 0 3px rgba(240, 215, 165, 0.5)', ..._focus }}
      {...rest}>
      {children}
    </MetalButton>
  );
};

export default GoldButton;
