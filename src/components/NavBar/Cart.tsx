import { Badge, Box, Collapse, Container, HStack, Portal, useDisclosure, useOutsideClick } from '@chakra-ui/react';
import { FC, RefObject, useContext, useRef } from 'react';
import { CgShoppingCart } from 'react-icons/cg';

import CartContext from '../../contexts/CartContext';
import NavBarCartMenu from './CartMenu';

type NavBarCartProps = {
  parentRef: RefObject<HTMLDivElement>;
};

const NavBarCart: FC<NavBarCartProps> = ({ parentRef }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const cartIconRef = useRef<string>('');
  useOutsideClick({
    ref: parentRef,
    handler: () => {
      cartIconRef.current !== 'cart-icon' && isOpen && onClose();
    },
  });
  const { articles } = useContext(CartContext);

  const numberOfArticlesInCart = articles.length;

  return (
    <HStack cursor="pointer" spacing={0}>
      <Box
        display="flex"
        onClick={onToggle}
        onMouseEnter={() => (cartIconRef.current = 'cart-icon')}
        onMouseLeave={() => (cartIconRef.current = '')}>
        <CgShoppingCart fontSize={24} />
        {numberOfArticlesInCart > 0 && (
          <Badge fontWeight="bold" rounded="3xl" boxSize="2em" textAlign="center" bgColor="gold.500">
            <Box color="blackAlpha.800">{numberOfArticlesInCart}</Box>
          </Badge>
        )}
      </Box>
      <Portal containerRef={parentRef}>
        <Collapse in={isOpen} animateOpacity>
          <Container maxW={'480px'}>
            <NavBarCartMenu onGoToCartClick={onClose} />
          </Container>
        </Collapse>
      </Portal>
    </HStack>
  );
};

export default NavBarCart;
