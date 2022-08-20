import { ButtonProps } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import MetalButton from './MetalButton';

const SilverButton: FC<PropsWithChildren<ButtonProps>> = ({ children, _focus, _hover, ...rest }) => {
  return (
    <MetalButton
      borderColor="#bdbdbd"
      _hover={{ backgroundColor: 'rgba(189, 189, 189, 0.2)', ..._hover }}
      _focus={{ boxShadow: '0 0 0 3px rgba(189, 189, 189, 0.2)', ..._focus }}
      {...rest}>
      {children}
    </MetalButton>
  );
};

export default SilverButton;
