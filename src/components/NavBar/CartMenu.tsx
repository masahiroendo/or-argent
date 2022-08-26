import { Flex, HStack, Icon, Stack } from '@chakra-ui/react';
import { GoTrashcan } from 'react-icons/go';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import { ROUTES } from '../../router/constant';
import GoldButton from '../buttons/GoldButton';

const NavBarCartMenu = () => {
  const { articles, removeFromCart } = useContext(CartContext);
  // const productsToDisplay = storeProducts.??? récupérer les produits qui ont les id qui sont issus des articles du context,
  // transformer (map?) ca pour pouvoir afficher la quantité correspondante ; image, nom, quantité, slug.

  const cartIsEmpty = articles.length === 0;

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  return (
    <Stack pb={2}>
      {/*  productsToDisplay.map*/}
      {articles.map((p) => (
        <HStack key={p.id} flex={1}>
          <Flex>{p.id} </Flex>
          <Flex>x {p.quantity} </Flex>
          <Icon as={GoTrashcan} cursor="pointer" onClick={() => handleRemove(p.id)} />
        </HStack>
      ))}
      {!cartIsEmpty ? (
        <Link to={ROUTES.CART}>
          <GoldButton boxSize="full">Go to Cart</GoldButton>
        </Link>
      ) : (
        <Flex justifyContent="center" display="flex">
          Cart is empty
        </Flex>
      )}
    </Stack>
  );
};

export default NavBarCartMenu;
