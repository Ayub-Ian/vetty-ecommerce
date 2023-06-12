import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/vetty-logo-2.svg";
import hero from "../../../assets/landing-hero.png";

export default function LandingPage() {
  return (
    <div className="landing--wrapper">
      <div className="landing--header">
        <img src={logo} alt="logo"/>
      </div>
      <div className="landing--container">
        <div className="landing--cta-text">
          <div className="landing--heading-wrapper">
          <h1 className="landing--heading">Shop</h1>
          <h1 className="landing--heading">with no</h1>
          <h1 className="landing--heading">limit</h1>
          </div>
        
        <p className="landing--text">We are always here for your pet's good health and well-being</p>
        <div className="landing--auth">
          <Link to="/login">
            <button className="landing--cta landing--cta-login ">Get started</button>
          </Link>
          <Link to="/register">
            <button className="landing--cta">Join us</button>
          </Link>
        </div>
        </div>
        <div className="landing--hero">
            <img src={hero} alt="pup" />
        </div>
      </div>
    </div>
  );
}
