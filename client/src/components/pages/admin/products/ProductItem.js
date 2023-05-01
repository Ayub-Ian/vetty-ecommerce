import React, { Fragment, useState } from "react";
import Modal from "../../../modal/Modal";
import UpdateProduct from "./UpdateProduct";

function ProductItem({ product, handleDelete, onUpdateData }) {
    const [show, setShow] = useState(false);
  return (
    <Fragment>
      <tr>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>
          <img src={product.image_url.url} alt={product.name} />
        </td>
        <td>
          <div className="form-actions">
            <button onClick={() => setShow(true)}>Edit</button>
            <button
              onClick={() => handleDelete(product.id)}
              className="form-delete"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
      <Modal show={show} onClose={() => setShow(false)} title="Update product" >
        <UpdateProduct product={product} onUpdateData={onUpdateData} setShow={setShow} />
      </Modal>
    </Fragment>
  );
}

export default ProductItem;
