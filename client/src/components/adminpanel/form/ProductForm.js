/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./productform.css";

function ProductForm({ setProducts, products }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isProductAdded, setIsProductAdded] = useState(false);

  if (!Array.isArray(products)) {
    throw new TypeError("The products prop must be an array.");
  }

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      id: Math.random().toString(36).substring(7),
      name: name,
      price: price,
      imageUrl: imageUrl,
    };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setImageUrl("");
    setIsProductAdded(true);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
      {isProductAdded && (
        <>
          <h2>Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    width="100"
                    height="100"
                  />
                  {product.name} - {product.price}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ProductForm;*/



import React, { useState } from "react";

import "./productform.css";

function ProductForm() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isProductAdded, setIsProductAdded] = useState(false);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      id: Math.random().toString(36).substring(7),
      name: name,
      price: price,
      imageUrl: imageUrl,
    };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setImageUrl("");
    setIsProductAdded(true);
  };

  const handleDeleteProduct = (productId) => {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
      {isProductAdded && (
        <>
          <h2>Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  width="100"
                  height="100"
                />
               
               {product.name} - {product.price}
                <button onClick={() => handleDeleteProduct(product.id)}>
                Delete
                </button>
                </li>
                ))}
                </ul>
                </>
                )}
                </div>
                );
                }

                export default ProductForm;















