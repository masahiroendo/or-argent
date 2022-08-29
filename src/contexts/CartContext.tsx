import { createContext, FC, PropsWithChildren, useState } from 'react';

export type Article = {
  id: string;
  quantity: number;
};

type CartContextType = {
  articles: Article[];
  addToCart: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  // retrieveFromCart: (id: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  const addToCart = (id: string, quantity: number): void => {
    const updatedArticles = [...articles];
    // if there is no article, then we just add and return
    if (updatedArticles.length === 0) {
      setArticles([{ id, quantity }]);
      return;
    }

    // we try to find the article with the given id
    const foundIndex = updatedArticles.findIndex((a) => {
      return a.id === id;
    });

    // if found (when the foundIndex is !== -1)
    if (foundIndex !== -1) {
      // updatedArticles[foundIndex] = { id, quantity: updatedArticles[foundIndex].quantity + quantity };
      // then we increment the existing article quantity by "quantity"
      updatedArticles[foundIndex].quantity += quantity;
    } else {
      // otherwise we add the new article in the array or articles
      updatedArticles.push({ id, quantity });
    }

    setArticles(updatedArticles);
  };

  const removeFromCart = (id: string) => {
    const foundIndex = articles.findIndex((a) => {
      return a.id === id;
    });

    if (foundIndex === -1) {
      return;
    }

    const updatedArticles = articles.filter((a) => a.id !== id);
    setArticles(updatedArticles);
  };

  // const retrieveFromCart = (id: string, quantity: number) => {};

  const value: CartContextType = {
    articles,
    addToCart,
    removeFromCart,
    // retrieveFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
