import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../../../utils/network";
import Modal from "../../../modal/Modal";
import AdminLayout from "../layout/Layout";
import AddService from "./AddService";
import ServiceList from "./ServiceList";
import UpdateService from "./UpdateService";

function Services() {
  const [services, setServices] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const allServices = async () => {
    setLoading(true);
    try {
      const res = await client.allServices();
      setServices(res.data);
      setError(null);
    } catch (error) {
      setError(error.response.data);
    }
    setLoading(false);
  };

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const res = await client.deleteService(id);
      handleServiceDelete(id);
    } catch (error) {
      // setError(error.response.data)
      console.log(error);
    }
    setLoading(false);
  };

  // Updates messages after delete button is clicked
  function handleServiceDelete(id) {
    const updatedService = services.filter((service) => service.id !== id);
    setServices(updatedService);
  }

  const handleUpdateService = (updatedService) => {
    const updatedServices = services.map(service => {
      if (service.id === updatedService.id) {
        return updatedService
      } else {
        return service
      }
    })
    setServices(updatedServices)
  }

  useEffect(() => {
    allServices();
  }, []);

  return (
    <AdminLayout>
      <div className="container">
        <h2>All Services</h2>

        <AddService
          setError={setError}
          setLoading={setLoading}
          onAddService={handleAddService}
        />
        {loading ? (
          <div>Fetching all services. Please wait...</div>
        ) : (
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            {!services ? (
              <div>No available services</div>
            ) : (
              <ServiceList services={services} handleDelete={handleDelete} onUpdateData={handleUpdateService} />
            )}
          </table>
        )}
      </div>
    </AdminLayout>
  );
}

export default Services;
