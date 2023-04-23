import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Home.css';
// import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
// import Footer from './Footer';
import { Carousel } from 'react-bootstrap';

const Product = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
  const fetchProducts = async () => {
  try {
  const res = await axios.get('https://food-carty-api.onrender.com');
  setProducts(res.data);
  console.log(res.data); // to check if the data is received properly
  } catch (error) {
  console.error(error);
  }
  };
  
  fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newCartItem = {
      ...product,
      rating: 0,
    };
    cartItems.push(newCartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    const cartCount = cartItems.length;
    localStorage.setItem('cartCount', cartCount);
  };
  
   
  

  return (
    
    <div className="container">
      {/* <Navbar /> */}
      <div className="mx-auto d-flex justify-content-center">
  <Carousel interval={3000}>
    <Carousel.Item>
      <img
        className="d-md-block"
        // src="https://c4.wallpaperflare.com/wallpaper/681/930/507/bread-rye-bread-baked-goods-baguette-wallpaper-preview.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-md-block"
        // src="https://c0.wallpaperflare.com/preview/489/682/388/plant-cake-food-dessert.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-md-block"
        // src="https://c1.wallpaperflare.com/preview/650/547/675/food-cake-bread-bakery.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
</div>

      <h1>Best Seller</h1>
      <div className="row">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
              <div className="card">
                <img className="card-img-top" src={product.image_url} alt="product img" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                  <Rating
  initialRating={product.rating}
  emptySymbol="fa fa-star-o fa-lg"
  fullSymbol="fa fa-star fa-lg"
  onClick={(value) => {
    product.rating = value;
    localStorage.setItem('cartItems', JSON.stringify(products));
  }}
/>


                  <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <div>
  <h1>New Products</h1>
  <div className="row">
    {products && products.length > 0 ? (
      products.map((product) => (
        <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
          <div className="card">
            <img className="card-img-top" src={product.image_url} alt="product img" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">${product.price}</p>
              <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>Loading...</p>
    )}
  </div>
</div>

      </div>
      <div className="text-center">
        <Link to="/cart">
          <button className="btn btn-primary">View Cart</button>
        </Link>
      </div>
      {/* <Footer /> */}

    </div>
    
  );
};

export default Product;