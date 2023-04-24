import { useState, useEffect } from 'react';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get("/orders");
      setOrders(res.data);
    };
    fetchOrders();
  }, []);
  return (
    <div className="orders">
      {orders.map((order) => (
        <div className="order" key={order._id}>
          <h3>{order.orderNumber}</h3>
          <p>{order.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;

