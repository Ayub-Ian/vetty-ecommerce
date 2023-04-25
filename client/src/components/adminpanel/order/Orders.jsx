/*import { useState, useEffect } from 'react';
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

export default Orders;*/

import React, { useState } from 'react';
import './Orders.scss'

function OrdersPage() {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Smith', product: 'iPhone', quantity: 2, total: 2000 },
    { id: 2, customer: 'Jane Doe', product: 'Samsung Galaxy', quantity: 1, total: 1000 },
    { id: 3, customer: 'Bob Johnson', product: 'iPad', quantity: 3, total: 3000 }
  ]);

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  }

  const deleteOrder = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
  }

  return (
    <div>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.total}</td>
              <td>
                <button onClick={() => deleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddOrderForm addOrder={addOrder} />
    </div>
  );
}

function AddOrderForm(props) {
  const [id, setId] = useState('');
  const [customer, setCustomer] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addOrder({ id, customer, product, quantity, total });
    setId('');
    setCustomer('');
    setProduct('');
    setQuantity('');
    setTotal('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Order</h2>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        Customer:
        <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
      </label>
      <label>
        Product:
        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
      </label>
      <label>
        Quantity:
        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <label>
        Total:
        <input type="text" value={total} onChange={(e) => setTotal(e.target.value)} />
      </label>
      <button type="submit">Add</button>
    </form>
  )
}

export default OrdersPage;



