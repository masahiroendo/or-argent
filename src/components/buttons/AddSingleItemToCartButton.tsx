import { Box } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { MetalType } from '../../constants/products';
import CartContext from '../../contexts/CartContext';
import GoldIconButton from './GoldIconButton';
import SilverIconButton from './SilverIconButton';

type AddSingleItemToCartButtonProps = {
  id: string;
  metal: MetalType;
};

const AddSingleItemToCartButton: FC<AddSingleItemToCartButtonProps> = ({ id, metal }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(id, 1);
  };

  return (
    <Box>
      {metal === 'gold' ? (
        <GoldIconButton aria-label="Add to cart" onClick={handleAddToCart}>
          <CgShoppingCart />
        </GoldIconButton>
      ) : (
        <SilverIconButton aria-label="Add to cart" onClick={handleAddToCart}>
          <CgShoppingCart />
        </SilverIconButton>
      )}
    </Box>
  );
};

export default AddSingleItemToCartButton;
