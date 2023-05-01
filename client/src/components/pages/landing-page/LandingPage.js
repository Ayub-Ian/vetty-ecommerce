import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/vetty-logo-2.svg";
import hero from "../../../assets/landing-hero.png";

export default function LandingPage() {
  return (
    <div className="landing--wrapper">
      <div className="landing--header">
        <img className="landing--logo" src={logo} alt="Vetty logo" />
      </div>
      <div className="landing--container">
        <div className="landing--cta-text">
        <h1 className="landing--heading">We are always here for your pet's good health and well-being</h1>
        <div className="landing--auth">
          <Link to="/login">
            <button className="landing--cta landing--cta-login ">log in</button>
          </Link>
          <Link to="/register">
            <button className="landing--cta">register</button>
          </Link>
        </div>
        <p className="landing--leading">Trusted by over 100+ pet lovers</p>
        </div>
        <div className="landing--hero">
            <img src={hero} alt="pup" />
        </div>
      </div>
    </div>
  );
}
