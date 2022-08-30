import { Box, Flex, Icon, Image, List, ListItem, OrderedList, SimpleGrid } from '@chakra-ui/react';
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
    <SimpleGrid pb={2}>
      <List>
        <OrderedList>
          {cartItems.map((p) => (
            <ListItem key={p.id}>
              <Flex direction="row" justifyContent="center">
                <NavLink to={`${ROUTES.PRODUCTS}/${p.slug}`}>
                  <Image src={p.image} boxSize="100px" objectFit="cover" />
                </NavLink>
                <Box>{p.name} </Box>
                <Box>
                  {currency.symbol} {p.price}{' '}
                </Box>
                <Box>x {p.quantity} </Box>
                <Icon as={GoTrashcan} cursor="pointer" onClick={() => handleRemove(p.id)} />
              </Flex>
            </ListItem>
          ))}
        </OrderedList>
      </List>
      {!cartIsEmpty ? (
        <Link to={ROUTES.CART}>
          <GoldButton boxSize="full" onClick={onGoToCartClick}>
            Go to Cart
          </GoldButton>
        </Link>
      ) : (
        <Flex justifyContent="center" display="flex">
          Cart is empty
        </Flex>
      )}
    </SimpleGrid>
  );
};

export default NavBarCartMenu;
