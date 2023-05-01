import React, { useState } from "react";
import client from "../../../../utils/network";
import "./service.scss";
function UpdateService({ service, setShow, onUpdateData }) {
  const [name, setName] = useState(service.name);
  const [price, setPrice] = useState(service.price);
  const [description, setDescription] = useState(service.description);
  const [imageFile, setImageUrl] = useState(service.image_url.url);

  const handleUpdateService = async (event) => {
    event.preventDefault();
    const formData = {
      name: name,
      price: price,
      description: description,
    };

    try {
      const res = await client.updateService(service.id, formData);
      onUpdateData(res.data)
      setShow(false)
    } catch (error) {
      console.log(error.response)
    }
    console.log(formData);
    // setServices([...services, formData]);
  };

  return (
    <form onSubmit={handleUpdateService} autoComplete="off">
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
      <img src={service.image_url.url} alt={service.name} name="imageUrl" onChange={(e) => setImageUrl(e.target.files[0])} />
      <input type="file" />
    </div>
    <input type="submit" value="Save" className="save--input" />
  </form>
  );
}
export default UpdateService;
