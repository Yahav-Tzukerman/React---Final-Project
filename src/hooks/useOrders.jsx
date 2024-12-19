import { useState, useEffect } from "react";
import OrderService from "../services/orders.service";

function useOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = OrderService.getOrders((ordersData) => {
      setOrders(ordersData);
    });

    return () => unsubscribe();
  }, []);

  return orders;
}

export default useOrders;
