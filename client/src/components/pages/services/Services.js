import React, { useState, useEffect } from 'react';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/services/services')
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div>
      <h2>Services</h2>
      <p>This is my services file</p>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;


















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Services.css';

// function Services() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetch('/services')
//       .then(response => response.json())
//       .then(data => setServices(data));
//   }, []);

//   const serviceItems = services.map(service => {
//     return (
//       <div key={service.id} className="service">
//         <h3>
//           <Link to={`/services/${service.id}`}>{service.name}</Link>
//         </h3>
//         <p>{service.description}</p>
//         <p>Price: ${service.price}</p>
//         <hr />
//       </div>
//     );
//   });

//   return (
//     <div className="services-container">
//       <div className="services-header">
//         <h1>Services Page</h1>
//       </div>
//       <div className="services-grid">{serviceItems}</div>
//     </div>
//   );
// }

// export default Services;
