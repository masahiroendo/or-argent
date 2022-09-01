import { useContext } from 'react';

import OrderContext from '../contexts/OrderContext';

const useOrders = () => {
  const { orders, addOrder } = useContext(OrderContext);

  return {
    addOrder,
    orders,
  };
};

export type UseOrdersType = ReturnType<typeof useOrders>;

export default useOrders;
