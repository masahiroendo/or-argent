import { useContext } from 'react';
import { storeProducts } from '../constants/products';

import CartContext, { CartItem } from '../contexts/CartContext';

const useCart = () => {
  const { articles, addToCart, removeFromCart, updateCartItem } = useContext(CartContext);

  const articlesIds = articles.map((a) => a.id);
  const filteredProducts = storeProducts.filter((p) => {
    const isProductInCart: boolean = articlesIds.includes(p.id);
    return isProductInCart;
  });

  const cartItems: CartItem[] = filteredProducts.map((p) => {
    return {
      id: p.id,
      image: p.images[0].thumbnail,
      name: p.name,
      price: p.price,
      quantity: articles.find((a) => a.id === p.id)?.quantity || 0,
      slug: p.slug,
    };
  });

  return {
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
  };
};

export type UseCartType = ReturnType<typeof useCart>;

export default useCart;
