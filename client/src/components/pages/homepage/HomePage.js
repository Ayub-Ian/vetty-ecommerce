import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import ResponsiveCards from "./Card";
import medical_paw from "../../../assets/medical-paw.png";
import pet_care from "../../../assets/pet-care.png";
import pet_belt from "../../../assets/pet-belt.png";
import hero_dog from "../../../assets/hero-dog.png";
// import Footer from './Footer/footer';
// import { initTE, Ripple } from "tw-elements";

export default function HomePage({ isLoggedIn }) {
const [products, setProducts] = useState([]);
const [product, setProduct] = useState([]);

const [services, setServices] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('all');

// useEffect(() => {
// initTE({ Ripple });

fetch('/api/products')
  .then(res => res.json())
  .then(data => setProducts(data))
  .catch(error => console.log(error));

fetch('/api/services')
  .then(res => res.json())
  .then(data => setServices(data))
  .catch(error => console.log(error));
// }, []);

const filteredProducts = selectedCategory === 'all' ? products : products.filter(products=> products.category === selectedCategory);
const uniqueCategories = [...new Set(products.map(products => products.category))];

return (
<>
<Navbar />
<div className="container">
<div className="hero--cta-wrapper">
<div className="hero--cta-l">
<h1>We are always here for your pet's good health</h1>
<div className="button--cta">
<Link to="/products" className="shop--cta">Shop now</Link>
<Link to="/services" className="service--cta">Get a service</Link>
</div>
</div>
<div className="hero--cta-r">
<img src={hero_dog} alt="hero dog" />
</div>
</div>

<div className="home--service">
      <div className="home--title">
        <p className="--title">Services</p>
        <Link to="/services">
          see all services
          <ChevronRightIcon className="hero-icon" />
        </Link>
      </div>
      <div className="home-service-wrapper">
        <div className="home--service-card">
          <div className="home--service-cta">
            <p>Medical</p>
            <Link>Get service</Link>
          </div>
          <img src={medical_paw} alt="medical paw" />
        </div>
        <div className="home--service-card">
          <div className="home--service-cta">
            <p>Pet care</p>
            <Link to="/order-service/petcare">Get service</Link>
          </div>
          <img src={pet_care} alt="medical paw" />
        </div>
        <div className="home--service-card">
          <div className="home--service-cta">
            <p>Training</p>
            <Link>Get service</Link>
          </div>
          <img src={pet_belt} alt="medical paw" />
        </div>
      </div>
    </div>

    <div className="home--product">
      <div className="home--title">
        <p className="--title">Products</p>
        <Link to="/products">
          see all products
          <ChevronRightIcon className="hero-icon" />
        </Link>
      </div>
      <div className="home-product-wrapper">
      {filteredProducts.slice(0).map(product => (
<div key={product._id} className="home--product-card">
<Link to={`/product/${product._id}`}>
<div className="home--product-img">
<img src={product.image} alt={product.name} />
</div>
<div className="home--product-info">
<h2>{product.name}</h2>
<p className="home--product-price">${product.price.toFixed(2)}</p>
</div>
</Link>
</div>
))}
</div>
</div>

<div>
  {<ResponsiveCards/>}
</div>

</div>
{/* <Footer /> */}
</>
);
}






