import React, { useState, useEffect } from 'react';

function Service() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch data from API endpoint
    fetch('http://127.0.0.1:3000/services')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
    
        {Array.isArray(data) && data.map((service) => (
          <div className="col-lg-4 col-md-6 mb-4" key={service.id}>
             <div class="card">
    <img class="card-img-top" src={service.image_url} alt="product img" />
    <div class="card-body">
      <h5 class="card-title">{service.name}</h5>
      <p class="card-text">{service.description}</p>
      <p class="card-text">${service.price}</p>
    </div>
  </div>
          </div>
        ))}
      
    </div>
  );
}

export default Service;
