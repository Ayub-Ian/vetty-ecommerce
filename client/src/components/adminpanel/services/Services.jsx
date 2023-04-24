import { useState, useEffect } from 'react';
import axios from 'axios';

function Services() {
  const [service, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      const res = await axios.get("/service");
      setServices(res.data);
    };
    fetchServices();
  }, []);
  return (
    <div className="services">
      {service.map((services) => (
        <div className="services" key={services._id}>
          <h3>{services.servicesNumber}</h3>
          <p>{services.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;