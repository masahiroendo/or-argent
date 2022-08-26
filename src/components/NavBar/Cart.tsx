import { Badge, Box, Collapse, Container, HStack, Portal, useDisclosure, useOutsideClick } from '@chakra-ui/react';
import { FC, RefObject, useContext } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import CartContext from '../../contexts/CartContext';
import NavBarCartMenu from './CartMenu';

type NavBarCartProps = {
  parentRef: RefObject<HTMLDivElement>;
};

const NavBarCart: FC<NavBarCartProps> = ({ parentRef }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  // useOutsideClick({
  //   ref: parentRef,
  //   handler: () => {},
  //   // handler: () => {
  //   //   onClose();
  //   // },
  // });
  const { articles } = useContext(CartContext);

  const numberOfArticlesInCart = articles.length;

  return (
    <HStack cursor="pointer" spacing={0}>
      <Box
        display="flex"
        onClick={() => {
          isOpen ? onClose() : onOpen();
        }}>
        {<CgShoppingCart fontSize={24} />}
        {numberOfArticlesInCart > 0 && (
          <span>
            <Badge fontWeight="bold" rounded="3xl" boxSize="2em" textAlign="center" bgColor="gold.400">
              {numberOfArticlesInCart}
            </Badge>
          </span>
        )}
      </Box>
      <Portal containerRef={parentRef}>
        <Collapse in={isOpen} animateOpacity>
          <Container maxW={'480px'}>
            <NavBarCartMenu />
          </Container>
        </Collapse>
      </Portal>
    </HStack>
  );
};

export default NavBarCart;
