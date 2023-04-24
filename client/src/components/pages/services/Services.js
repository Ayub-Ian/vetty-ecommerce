import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

function Service() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch data from API endpoint
    fetch("http://127.0.0.1:3000/services")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
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
    <div className="row">
      {Array.isArray(data) &&
        data.map((service) => (
          <div className="col-lg-3 col-md-6 mb-4" key={service.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={service.image_url} alt="service img" />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">${service.price}</p>
                <Rating
                  initialRating={service.rating}
                  emptySymbol="fa fa-star-o fa-lg"
                  fullSymbol="fa fa-star fa-lg"
                  onClick={(value) => {
                    service.rating = value;
                    localStorage.setItem("cartItems", JSON.stringify(service));
                  }}
                />
                <p className="card-text">{service.description}~</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(service)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      <div className="col-lg-12">
        <Link to="/cart">
          <button className="btn btn-primary">View Cart</button>
        </Link>
      </div>
    </div>
  );
}

export default Service;
