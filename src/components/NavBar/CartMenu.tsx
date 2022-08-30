import { Box, Center, Container, Flex, Icon, Image, List, ListItem } from '@chakra-ui/react';
import { GoTrashcan } from 'react-icons/go';
import { FC, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ROUTES } from '../../router/constant';
import GoldButton from '../buttons/GoldButton';
import useCart from '../../hooks/use-cart';
import { CurrencyContext } from '../../contexts/CurrencyContext';

type NavBarCartMenuProps = {
  onGoToCartClick: () => void;
};

const NavBarCartMenu: FC<NavBarCartMenuProps> = ({ onGoToCartClick }) => {
  const { currency } = useContext(CurrencyContext);
  const { cartItems, removeFromCart } = useCart();

  const cartIsEmpty = cartItems.length === 0;

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  return (
    <Container justifyContent="center" maxW="container.xl">
      <Flex direction="column">
        <List>
          {cartItems.map((p) => (
            <ListItem key={p.id}>
              <Flex direction="row" alignItems="center" gap={8}>
                <NavLink to={`${ROUTES.PRODUCTS}/${p.slug}`} onClick={onGoToCartClick}>
                  <Image src={p.image} boxSize="100px" objectFit="cover" />
                </NavLink>
                <Box>
                  <NavLink to={`${ROUTES.PRODUCTS}/${p.slug}`} onClick={onGoToCartClick}>
                    {p.name}
                  </NavLink>
                  <Box>
                    {currency.symbol} {p.price}{' '}
                  </Box>
                </Box>
                <Box>x {p.quantity} </Box>
                <Icon as={GoTrashcan} cursor="pointer" onClick={() => handleRemove(p.id)} />
              </Flex>
            </ListItem>
          ))}
        </List>
        <Center>
          {!cartIsEmpty ? (
            <Link to={ROUTES.CART}>
              <GoldButton onClick={onGoToCartClick}>Go to Cart</GoldButton>
            </Link>
          ) : (
            <Flex justifyContent="center" display="flex">
              Cart is empty
            </Flex>
          )}
        </Center>
      </Flex>
    </Container>
  );
};

export default NavBarCartMenu;
