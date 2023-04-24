import { useState, useEffect } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;




/*import React from 'react';

const ProductList = () => {
  return (
    <div>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
        <li>Product 5</li>
        <li>Product 6</li>
        <li>Product 7</li>
        <li>Product 8</li>
        <li>Product 9</li>
        <li>Product 10</li>
        <li>New Product</li>
      </ul>
    </div>
  )
}

export default ProductList;*/


/*import React, { useEffect, useState } from 'react'
import client from '../../utils/network'

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // get request for all products
    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await client.allProducts();
            setProducts(response.data)
        } catch (error) {
            setError(JSON.stringify(error.response.data))
        }
        setLoading(false)
    }
    

    useEffect(() => {
        getProducts();
    }, [])

    
    return (
      <div>Products</div>
    )
  }
  
export default Products*/




