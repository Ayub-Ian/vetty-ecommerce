import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import client from "../../../utils/network";
import Navbar from "../../navbar/Navbar";
import "./service.css";

function Service() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  const getServices = async () => {
    setLoading(true)
    try {
      const res = await client.allServices()
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    // fetch data from API endpoint
    getServices()
  }, []);

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
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
        {data.length === 0 ? <h2>Loading...</h2> :(
          <Fragment>
        <h2 className="--title">All services</h2>
        <div className="service-container">
          {Array.isArray(data) &&
            data.map((service) => (
              <div className="service-item" key={service.id}>
                <div className="disp-service">
                  <img
                    className="item-1"
                    src={service.image_url.url}
                    alt="service img"
                  />
                  <div className="card-body">
                    <h5 className="item-2">{service.name}</h5>
                    <p className="item-3">{service.description}</p>
                    <p className="item-4">${service.price}</p>
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
        </div></Fragment>)}
      </div>
    </div>
  );
}

export default Service;
