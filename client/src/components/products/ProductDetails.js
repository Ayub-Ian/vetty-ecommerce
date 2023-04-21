import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsData from '../data/productsData';
import "./ProductDetails.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsData.find((product) => product.id === Number(productId));

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((item) => item.id === product.id);
    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity++;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    navigate("/cart"); // navigate to the cart page after adding the item to the cart
  };

  const handleViewCart = () => {
    navigate("/cart");
  };

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-details-container">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="view-cart-button" onClick={handleViewCart}>
          View Cart
        </button>
      </div>
      <div className="cart-info-container">
        <p>{cart.length} items in cart</p>
      </div>
    </div>
  );
};

export default ProductDetail;