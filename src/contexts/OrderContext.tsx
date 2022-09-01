import { createContext, FC, PropsWithChildren, useState } from 'react';

import { Order } from '../pages/Cart/types';

type OrderContextType = {
  orders: Order[];
  addOrder: (order: Order) => Order[];
};

const ORDERS_KEY = 'or_argent_orders';

const getOrderFromStorage = (): Order[] | null => {
  const value = localStorage.getItem(ORDERS_KEY);
  if (!value) {
    return null;
  }

  const parsedOrders = JSON.parse(value) as Order[];
  return parsedOrders;
};

const OrderContext = createContext<OrderContextType>({} as OrderContextType);

export const OrderContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(getOrderFromStorage() || []);

  const addOrder = (order: Order): Order[] => {
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(updatedOrders));
    return updatedOrders;
  };

  const value = {
    orders,
    addOrder,
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};

export default OrderContext;
