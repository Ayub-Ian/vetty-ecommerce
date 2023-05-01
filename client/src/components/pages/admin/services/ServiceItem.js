import React, { Fragment, useState } from "react";
import Modal from "../../../modal/Modal";
import UpdateService from "./UpdateService";

function ServiceItem({ service, handleDelete, onUpdateData }) {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <tr key={service.id}>
        <td>{service.name}</td>
        <td>{service.description}</td>
        <td>{service.price}</td>
        <td>
            <img src={service.image_url.url} alt={service.name} />
        </td>
        <td>
          <div className="form-actions">
            <button onClick={() => setShow(true)}>Edit</button>
            <button
              onClick={() => handleDelete(service.id)}
              className="form-delete"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>

      <Modal show={show} onClose={() => setShow(false)} title="Update service">
        <UpdateService service={service} onUpdateData={onUpdateData} setShow={setShow} />
      </Modal>
    </Fragment>
  );
}

export default ServiceItem;
