import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../../utils/network";
import Navbar from "../../navbar/Navbar";
import "./Products.css";

const Products = () => {
  const [productsData, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const getProducts = async () => {
    setLoading(true)
    try {
      const res = await client.allProducts()
      setProducts(res.data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    // fetch data from API endpoint
    getProducts()
  }, []);

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

  const products = productsData.map((product) => {
    return (
      <div key={product.id} className="product">
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <p>Price: ${product.price}</p>
        <button onClick={()=>handleAddToCart(product)}>Add to cart</button>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
    <div className="products-container container">
      <div className="products-header">
        <h1>Products Page</h1>
      </div>
      <div className="products-grid">{products}</div>
    </div>
    </div>
  );
};

export default Products;