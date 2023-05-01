import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../../assets/vetty-logo.svg'
import client from "../../../utils/network";


export default function SignUpPage() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle input change to formdata state
  function handleChange(e) {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  // reset form 
  function resetForm() {
    setFormData({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }

  // Enable user to login 
  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      console.log(formData)
      const response = await client.register(formData);
      setError(null)
      resetForm()
      navigate('/login')
    } catch (err) {
      setError(err.response.data.error);
    }
    setLoading(false)
    
  }

  
  return (
    <div className="auth--wrapper">
        <div className="auth--logo">
            <img src={logo} alt="vetty logo" />
        </div>
      <div className="center">
        <h2 className="auth--heading">Create your account</h2>
        <p className="auth--title">Please enter your details</p>
        {error && !loading ?  <div className="error">
          {error.map((err,i) => (
            <li key={i}>{err}</li>
          ))}
        </div>:null }
        <form onSubmit={handleSignUp} autoComplete="off">
          <div className="auth--form-input">
            <label>Full name</label>
            <input type="text" name="name" onChange={handleChange} value={formData.name} required />
          </div>
          <div className="auth--form-input">
            <label>Email address</label>
            <input type="email" name="email" onChange={handleChange} value={formData.email} required />
          </div>
          <div className="auth--form-input">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} value={formData.password} required />
          </div>
          <div className="auth--form-input">
            <label>Confirm password</label>
            <input type="password" name="password_confirmation" onChange={handleChange} value={formData.password_confirmation} required />
          </div>
          { loading ?           <div className="loading">
            <p>Processing...</p>
          </div>:          <input
            className="auth--submit"
            type="submit"
            value="Create account"
          /> }



        </form>
        <div className="auth--cta">
          <p>Already have an account?</p>
          <Link to="/login">Log in to account</Link>
        </div>
      </div>
    </div>
  );
}
