import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

function Service() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch data from API endpoint
    fetch('http://127.0.0.1:3000/services')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newCartItem = {
      ...product,
      rating: 0,
    };
    cartItems.push(newCartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    const cartCount = cartItems.length;
    localStorage.setItem('cartCount', cartCount);
  };
  
  return (
    <div>
    
        {Array.isArray(data) && data.map((service) => (
          <div className="col-lg-4 col-md-6 mb-4" key={service.id}>
             <div class="card">
    <img class="card-img-top" src={service.image_url} alt="product img" />
    <div class="card-body">
      <h5 class="card-title">{service.name}</h5>
      <p class="card-text">{service.description}</p>
      <p class="card-text">${service.price}</p>
      <Rating
  initialRating={service.rating}
  emptySymbol="fa fa-star-o fa-lg"
  fullSymbol="fa fa-star fa-lg"
  onClick={(value) => {
    service.rating = value;
    localStorage.setItem('cartItems', JSON.stringify(service));
  }}
/>
    </div>
  </div>
  <div className="text-center">
  <button className="btn btn-primary" onClick={() => handleAddToCart(service)}>Add to Cart</button>

        <Link to="/cart">
          <button className="btn btn-primary">View Cart</button>
        </Link>
      </div>
          </div>
        ))}
    </div>

  );
}

export default Service;
