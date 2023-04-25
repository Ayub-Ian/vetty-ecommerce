/*import { useState, useEffect } from 'react';
import axios from 'axios';

function Services() {
  const [service, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      const res = await axios.get("/service");
      setServices(res.data);
    };
    fetchServices();
  }, []);
  return (
    <div className="services">
      {service.map((services) => (
        <div className="services" key={services._id}>
          <h3>{services.servicesNumber}</h3>
          <p>{services.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;*/


import React, { useState } from 'react';
import './services.scss'

function ServicesPage() {
  const [services, setServices] = useState([
    { id: 1, customer: 'John Smith', product: 'iPhone', quantity: 2, total: 2000 },
    { id: 2, customer: 'Jane Doe', product: 'Samsung Galaxy', quantity: 1, total: 1000 },
    { id: 3, customer: 'Bob Johnson', product: 'iPad', quantity: 3, total: 3000 }
  ]);

  const [newService, setNewService] = useState({
    customer: '',
    product: '',
    quantity: '',
    total: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewService({ ...newService, [name]: value });
  };

  const handleAddService = () => {
    const id = services.length + 1;
    const { customer, product, quantity, total } = newService;
    setServices([...services, { id, customer, product, quantity, total }]);
    setNewService({ customer: '', product: '', quantity: '', total: '' });
  };

  const handleDeleteService = id => {
    const updatedServices = services.filter(service => service.id !== id);
    setServices(updatedServices);
  };

  return (
    <div>
      <h1>Services</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.customer}</td>
              <td>{service.product}</td>
              <td>{service.quantity}</td>
              <td>{service.total}</td>
              <td><button onClick={() => handleDeleteService(service.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Service</h2>
      <div>
        <label>Customer:</label>
        <input type="text" name="customer" value={newService.customer} onChange={handleInputChange} />
      </div>
      <div>
        <label>Product:</label>
        <input type="text" name="product" value={newService.product} onChange={handleInputChange} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="text" name="quantity" value={newService.quantity} onChange={handleInputChange} />
      </div>
      <div>
        <label>Total:</label>
        <input type="text" name="total" value={newService.total} onChange={handleInputChange} />
      </div>
      <button onClick={handleAddService}>Add Service</button>
    </div>
  );
}

export default ServicesPage;






