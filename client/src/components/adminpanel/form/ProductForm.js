import React, { useState } from "react";

import './productform.css'


function ProductForm() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      id: Math.random().toString(36).substring(7),
      name: name,
      price: price,
      imageUrl: imageUrl
    };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setImageUrl("");
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
          <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={price} onChange={(event) => setPrice(event.target.value)} />
        </label>
        <label>
          Image URL:
          <input type="text" name="imageUrl" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
        </label>
        <button type="submit">Add Product</button>
      </form>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.name} width="100" height="100" />
            {product.name} - {product.price}
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductForm;















