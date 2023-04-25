import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  const handleClearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  const handleDecreaseQty = (itemId) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex((item) => item.id === itemId);

    if (updatedCartItems[itemIndex].quantity > 1) {
      updatedCartItems[itemIndex].quantity--;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const handleIncreaseQty = (itemId) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex((item) => item.id === itemId);

    updatedCartItems[itemIndex].quantity++;
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
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
              <button onClick={() => handleDecreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncreaseQty(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h3>Total:</h3>
        <span>${getTotalPrice()}</span>
      </div>
    </div>
  );
}

export default Cart;
