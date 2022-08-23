import { createContext, FC, PropsWithChildren } from 'react';

type CartContextType = {
  addToCart: (id: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const addToCart = (id: string, quantity: number) => {
    console.log('addToCart: id & qty', id, quantity);
  };

  const value: CartContextType = {
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
