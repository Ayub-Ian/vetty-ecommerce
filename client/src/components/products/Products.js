import React from "react";
import { Link } from "react-router-dom";
import productsData from '../data/productsData';
import "./Products.css";

const Products = () => {
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
        <hr />
      </div>
    );
  });

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Products Page</h1>
      </div>
      <div className="products-grid">{products}</div>
    </div>
  );
};

export default Products;