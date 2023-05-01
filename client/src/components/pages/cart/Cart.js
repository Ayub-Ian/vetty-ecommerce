import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items.map((item) => ({ ...item, quantity: 1 })));
  }, []);

  const handleRemoveFromCart = (service) => {
    const newCartItems = cartItems.filter((item) => item.id !== service.id);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const handleAddToCart = (service) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === service.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleReduceFromCart = (service) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === service.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    // Navigate to the billing page with the price as a query parameter
    window.location.href = `/billing?price=${totalPrice}`;
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <h1 className="cart-title">Cart</h1>
        {cartItems.length === 0 ? (
          <p className="cart-empty-message">Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image_url.url}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="cart-item-quantity">
                    <button
                      className="cart-quantity-button"
                      onClick={() => handleReduceFromCart(item)}
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="cart-quantity-button"
                      onClick={() => handleAddToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="cart-remove-button"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
            <p className="cart-total-price">Total: ${totalPrice}</p>
            <button className="cart-checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        )}
        {/* <button className="check-out">
        <Link to="/Billing" >Checkout</Link><br></br>
      </button>  */}

        {/* <Link to="/home" className="cart-checkout-button">Back to Home</Link> */}
      </div>
    </div>
  );
};

export default Cart;
