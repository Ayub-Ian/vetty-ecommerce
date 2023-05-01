import React, { useState } from "react";
import client from "../../../../utils/network";
import './products.scss'
function AddProduct({ setLoading, setError, onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageUrl] = useState(null);
 


  const handleAddProduct= async (event) => {
    event.preventDefault();
     const formData = {
    name: name,
    price: price,
    description: description,
    image_url: imageFile
  };

    setLoading(true)
    try {
        const res = await client.addProduct(formData)
        setError(null)
        onAddProduct(res.data)
        setName("")
        setDescription("")
        setPrice("")
    } catch (error) {
        setError(error.response.data)  
        console.log(error.response)
    }
    setLoading(false)


    
    // setServices([...services, formData]);
  };


  return (
    <div className="product-form-container">
     
      <form onSubmit={handleAddProduct} autoComplete="off">
        <label>
          <p>Name:</p>
          <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          <p>Description:</p>
          <input type="text" name="description" value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <label>
          <p>Price:</p>
          <input type="number" name="price" value={price} onChange={(event) => setPrice(event.target.value)} />
        </label>
        <label>
          <p>Image URL:</p>
          <input type="file" name="imageUrl" defaultValue={imageFile} onChange={(event) => setImageUrl(event.target.files[0])} />
        </label>
        <button type="submit">Add product</button>
      </form>
    </div>
  );
}
export default AddProduct;







