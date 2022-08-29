import { Box, Flex, Icon, Image, List, ListItem, OrderedList, SimpleGrid } from '@chakra-ui/react';
import { GoTrashcan } from 'react-icons/go';
import { FC, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import CartContext from '../../contexts/CartContext';
import { ROUTES } from '../../router/constant';
import GoldButton from '../buttons/GoldButton';
import { storeProducts } from '../../constants/products';

const NavBarCartMenu: FC = () => {
  const { articles, removeFromCart } = useContext(CartContext);

  const articlesIds = articles.map((a) => a.id);
  const filteredProducts = storeProducts.filter((p) => {
    const isProductInCart: boolean = articlesIds.includes(p.id);
    return isProductInCart;
  });
  const productsToDisplay = filteredProducts.map((p) => {
    return {
      id: p.id,
      name: p.name,
      image: p.images[0].thumbnail,
      price: p.price,
      slug: p.slug,
      quantity: articles.find((a) => a.id === p.id)?.quantity,
    };
  });

  const cartIsEmpty = articles.length === 0;

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  return (
    <SimpleGrid pb={2}>
      <List>
        <OrderedList>
          {productsToDisplay.map((p) => (
            <ListItem key={p.id}>
              <NavLink to={ROUTES.CART}>
                <Image src={p.image} />
                <Box>{p.name} </Box>
              </NavLink>
              <Box>x {p.price} </Box>
              <Box>x {p.quantity} </Box>
              <Icon as={GoTrashcan} cursor="pointer" onClick={() => handleRemove(p.id)} />
            </ListItem>
          ))}
        </OrderedList>
      </List>
      {!cartIsEmpty ? (
        <Link to={ROUTES.CART}>
          <GoldButton boxSize="full">Go to Cart</GoldButton>
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
