import React, { useState } from "react";
import client from "../../../../utils/network";
import './products.scss'
function UpdateProduct({  product, onUpdateData, setShow }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [imageFile, setImageUrl] = useState(product.image_url.url);

  const handleUpdateProduct = async (event) => {
    event.preventDefault();
    const formData = {
      name: name,
      price: price,
      description: description
    };

    try {
      const res = await client.updateProduct(product.id, formData);
      onUpdateData(res.data)
      setShow(false)
    } catch (error) {
      console.log(error.response)
    }

    console.log(formData)
  };


  return (
    <form onSubmit={handleUpdateProduct} autoComplete="off">
    <div className="update--input-group">
      <label>Name</label>
      <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="update--input-group">
      <label>Description</label>
      <textarea rows="5" value={description} name="description" onChange={(e) => setDescription(e.target.value)} />
    </div>
    <div className="update--input-group">
      <label>Price</label>
      <input type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
    </div>
    <div className="update--input-group">
      <label>Image</label>
      <img src={product.image_url.url} alt={product.name} name="imageUrl" onChange={(e) => setImageUrl(e.target.files[0])} />
      <input type="file" />
    </div>
    <input type="submit" value="Save" className="save--input" />
  </form>
  );
}
export default UpdateProduct;







