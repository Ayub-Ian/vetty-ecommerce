// import React, { useState, useEffect } from 'react';
// import './card.css';

// const ResponsiveCards = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('your-api-url');
//       const data = await response.json();
//       setData(data);
//     };

//     fetchData();
//   }, []);

//   const Card = ({ image, name, amount }) => {
//     return (
//       <div className="card">
//         <img src={image} alt={name} />
//         <div className="details">
//           <h2>{name}</h2>
//           <p>{amount} Shillings</p>
//         </div>
//         <div className="cart-icon">
//           <i className="fa fa-cart-plus"></i>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="main">
//       <div className="card-container">
//         {data.map((item) => (
//           <Card
//             key={item.id}
//             image={item.image}
//             name={item.name}
//             amount={item.amount}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResponsiveCards;


import React, { useState, useEffect } from 'react';
import './card.css';

const ResponsiveCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=6');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const Card = ({ image, name, amount }) => {
    return (
      <div className="card">
        <img src={image} alt={name} />
        <div className="details">
          <h2>{name}</h2>
          <p>{amount} Shillings</p>
        </div>
        <div className="cart-icon">
          <i className="fa fa-cart-plus"></i>
        </div>
      </div>
    );
  };

  return (
    <div className="main">
      <div className="card-container">
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.thumbnailUrl}
            name={item.title}
            amount={Math.floor(Math.random() * 100) + 1} // generating a random amount for demonstration purposes
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCards;
