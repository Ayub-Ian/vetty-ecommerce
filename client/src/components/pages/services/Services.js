import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import "./service.css";

function Service() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch data from API endpoint
    fetch("http://127.0.0.1:3000/services")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const newCartItem = {
      ...product,
      rating: 0,
    };
    cartItems.push(newCartItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const cartCount = cartItems.length;
    localStorage.setItem("cartCount", cartCount);
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2 className="--title">All services</h2>
        <div className="service-container">
          {Array.isArray(data) &&
            data.map((service) => (
              <div className="service-item" key={service.id}>
                <div class="disp-service">
                  <img
                    class="item-1"
                    src={service.image_url.url}
                    alt="service img"
                  />
                  <div class="card-body">
                    <h5 class="item-2">{service.name}</h5>
                    <p class="item-3">{service.description}</p>
                    <p class="item-4">${service.price}</p>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(service)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
