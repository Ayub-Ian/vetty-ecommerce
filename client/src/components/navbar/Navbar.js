import { Link, NavLink, useNavigate } from "react-router-dom";
import React from "react";
import logo from "../../assets/vetty-logo.svg";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.clear()
    navigate("/login");
  };

  return (
    <nav className="container">
      <div className="navbar--wrapper">
        <img src={logo} alt="vetty logo" />
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/products">Shop</NavLink>
          </li>
        </ul>
        <div className="navbar--action">
          <div className="navbar--account">
            <UserIcon className="hero-icon" />
            <p>Account</p>

            <div className="account--actions">
                <Link>View profile</Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <Link>
            <ShoppingBagIcon className="hero-icon" />
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
