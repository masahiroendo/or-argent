import { FC } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';

import GoldButton from '../../components/buttons/GoldButton';
import SilverButton from '../../components/buttons/SilverButton';

type AddToCartButtonProps = {
  metal: string;
};

const AddToCartButton: FC<AddToCartButtonProps> = ({ metal }) => {
  const { t } = useTranslation(['translation', 'products']);

  const handlerAddToCartClick = () => {
    alert('need to implement an add to cart function');
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
          onClick={handlerAddToCartClick}>
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
          onClick={handlerAddToCartClick}>
          {t('add-to-cart', { ns: 'products' })}
        </SilverButton>
      )}
    </>
  );
};

export default AddToCartButton;
