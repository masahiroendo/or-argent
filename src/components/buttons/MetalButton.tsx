import { Button, ButtonProps } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

const MetalButton: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'outline',
  border = '1px',
  borderRadius = '5em',
  size = 'lg',
  ...rest
}) => {
  return (
    <Button variant={variant} border={border} borderRadius={borderRadius} size={size} {...rest}>
      {children}
    </Button>
  );
};

export default MetalButton;
