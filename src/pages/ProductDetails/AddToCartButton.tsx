import { FC, useContext } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';

import GoldButton from '../../components/buttons/GoldButton';
import SilverButton from '../../components/buttons/SilverButton';
import CartContext from '../../contexts/CartContext';

type AddToCartButtonProps = {
  metal: string;
  productId: string;
  quantity: number;
};

const AddToCartButton: FC<AddToCartButtonProps> = ({ productId, quantity, metal }) => {
  const { t } = useTranslation(['translation', 'products']);
  const { articles, addToCart } = useContext(CartContext);

  const handleAddToCartClick = () => {
    if (articles.some((p) => p.id === productId)) {
      alert('item alreast exist in cart.');
    }
    addToCart(productId, quantity);
  };

  return (
    <>
      {metal === 'gold' ? (
        <GoldButton
          aria-label="Add to cart"
          rightIcon={<CgShoppingCart fontSize={30} />}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}
          w="full"
          onClick={handleAddToCartClick}>
          {t('add-to-cart', { ns: 'products' })}
        </GoldButton>
      ) : (
        <SilverButton
          aria-label="Add to cart"
          rightIcon={<CgShoppingCart fontSize={30} />}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}
          w="full"
          onClick={handleAddToCartClick}>
          {t('add-to-cart', { ns: 'products' })}
        </SilverButton>
      )}
    </>
  );
};

export default AddToCartButton;
