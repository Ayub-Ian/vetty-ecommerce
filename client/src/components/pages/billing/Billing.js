import React, { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import './billing.css'

function Billing(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalPrice = searchParams.get("price");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for shopping with us!")
    navigate("/home")
    localStorage.removeItem("cartItems")
    localStorage.removeItem("cartCount")
    
  };



  return (
    <Fragment>
        <Navbar />
    <form onSubmit={handleSubmit} className=" container billing-form">
      <h2>Billing Information</h2>
      <div className="billing-form-wrapper">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
      </label>
      <label>
        State:
        <input
          type="text"
          value={state}
          onChange={(event) => setState(event.target.value)}
          required
        />
      </label>
      <label>
        Zip:
        <input
          type="text"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
          required
        />
      </label>
      <label>
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
          required
        />
      </label>
      <label>
        Expiration Date:
        <input
          type="text"
          value={expiration}
          onChange={(event) => setExpiration(event.target.value)}
          required
        />
      </label>
      <label>
        CVV:
        <input
          type="text"
          value={cvv}
          onChange={(event) => setCvv(event.target.value)}
          required
        />
      </label>
      </div>
      <h3>Total Price: KES {totalPrice}</h3>
      <button type="submit">Submit</button>
    </form>
    </Fragment>
  );
}

export default Billing;