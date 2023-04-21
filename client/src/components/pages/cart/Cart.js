import React from "react";
import Navbar from "../../navbar/Navbar";
import "./Cart.css";

function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  if (!cartItems || cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  const handleClearCart = () => {
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="cart">
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>${item.price * item.quantity}</span>
                </div>
                <div>
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total:</h3>
            <span>${getTotalPrice()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
