import { createContext, FC, PropsWithChildren, useState } from 'react';
import { Product } from '../constants/products';

export type Article = {
  id: string;
  quantity: number;
};

export type CartItem = Pick<Product, 'id' | 'name' | 'price' | 'slug'> & {
  image: string;
  quantity: number;
};

const CART_ARTICLES_KEY = 'or_argent_cart_articles';

const getCartFromStorage = (): Article[] | null => {
  const parsed = localStorage.getItem(CART_ARTICLES_KEY);
  if (!parsed) {
    return null;
  }

  const cartData = JSON.parse(parsed) as Article[];
  return cartData;
};

type CartContextType = {
  articles: Article[];
  addToCart: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateCartItem: (id: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>(getCartFromStorage() || []);

  const handleArticles = (newArticles: Article[]) => {
    setArticles(newArticles);
    localStorage.setItem(CART_ARTICLES_KEY, JSON.stringify(newArticles));
  };

  const findArticleIndex = (id: string): number => articles.findIndex((a) => a.id === id);
  const isArticleInCart = (id: string): boolean => findArticleIndex(id) !== -1;

  const addToCart = (id: string, quantity: number): void => {
    const updatedArticles = [...articles];
    // if there is no article, then we just add and return
    if (updatedArticles.length === 0) {
      handleArticles([{ id, quantity }]);
      return;
    }

    const foundIndex = findArticleIndex(id);
    if (foundIndex !== -1) {
      // updatedArticles[foundIndex] = { id, quantity: updatedArticles[foundIndex].quantity + quantity };
      // then we increment the existing article quantity by "quantity"
      updatedArticles[foundIndex].quantity += quantity;
    } else {
      // otherwise we add the new article in the array or articles
      updatedArticles.push({ id, quantity });
    }

    handleArticles(updatedArticles);
  };

  const removeFromCart = (id: string) => {
    if (!isArticleInCart(id)) {
      return;
    }

    const updatedArticles = articles.filter((a) => a.id !== id);
    handleArticles(updatedArticles);
  };

  const updateCartItem = (id: string, quantity: number) => {
    const foundIndex = findArticleIndex(id);
    if (foundIndex === -1) {
      return;
    }

    const updatesArticles = [...articles];
    updatesArticles[foundIndex].quantity = quantity;
    handleArticles(updatesArticles);
  };

  const value: CartContextType = {
    articles,
    addToCart,
    removeFromCart,
    updateCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
