import React, { useState, useEffect } from 'react';
// import "../products/products.css";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch data from API endpoint
    fetch('http://127.0.0.1:3000/products')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <ul>
        {data.map(item => (
          <li key={item.name}>{item.description} </li>

        ))}
      </ul>
    </div>
  );
}

export default Home;
