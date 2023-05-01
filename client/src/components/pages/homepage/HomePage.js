import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import medical_paw from "../../../assets/medical-paw.png";
import pet_care from "../../../assets/pet-care.png";
import pet_belt from "../../../assets/pet-belt.png";
import hero_dog from "../../../assets/hero-dog.png";
import ProductCard from "./ProductCard";
import client from "../../../utils/network";

export default function HomePage() {
  const [products, setProducts] = useState(null);

  const getAllProducts = async () => {
    try {
      const res = await client.allProducts();
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero--cta-wrapper">
          <div className="hero--cta-l">
            <h1>We are always here for your pet's good health</h1>
            <div className="button--cta">
              <Link to="/products" className="shop--cta">
                Shop now
              </Link>
              <Link to="/services" className="service--cta">
                Get a service
              </Link>
            </div>
          </div>
          <div className="hero--cta-r">
            <img src={hero_dog} alt="hero dog" />
          </div>
        </div>
        <div className="home--products">
        <div className="home--title">
            <p className="--title">Products</p>
            <Link to="/products">
              see all products
              <ChevronRightIcon className="hero-icon" />
            </Link>
          </div>
          <div className="card-container">
            {!products ? (
              <div>
                <p>Fetching products...</p>
              </div>
            ) : (
              products.map((item) => (
                <ProductCard
                  key={item.id}
                  image={item.image_url.url}
                  name={item.name}
                  amount={item.price} // generating a random amount for demonstration purposes
                />
              ))
            )}
          </div>
   
        </div>


      </div>
    </>
  );
}
