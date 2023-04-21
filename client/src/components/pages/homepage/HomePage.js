import React from "react";
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import medical_paw from "../../../assets/medical-paw.png";
import pet_care from "../../../assets/pet-care.png";
import pet_belt from "../../../assets/pet-belt.png";
import hero_dog from "../../../assets/hero-dog.png";

export default function HomePage() {
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
      </div>
    </>
  );
}
