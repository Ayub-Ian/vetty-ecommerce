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

/*import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://example.com/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Products Page</h1>
      </div>
      <div className="products-grid">
        {products.map((product) => (
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
        ))}
      </div>
    </div>
  );
};

export default Products;*/
