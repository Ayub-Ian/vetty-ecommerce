import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/vetty-logo.svg";
import { saveUser, storeToken } from "../../../utils/auth";
import client from "../../../utils/network";

export default function SignInPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // reset form 
  function resetForm() {
    setFormData({
      email: '',
      password: ''
    })
  }

  // handle input change to formdata state
  function handleChange(e) {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  // Enable user to login 
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData)
      const response = await client.login(formData)
      console.log(response)
      let token = response.data.data.token
      let user = response.data.data.user
      storeToken(token)
      saveUser(user.id, user.name, user.role)
      setError(null)
      resetForm()
      navigate("/home")
    } catch (error) {
      setError(error.response.data.error)
      
    }
    setLoading(false)
  }

  return (
    <div className="auth--wrapper">
      <div className="auth--logo">
        <img src={logo} alt="vetty logo" />
      </div>
      <div className="center">
        <h2 className="auth--heading">Log in to your account</h2>
        <p className="auth--title">Welcome back! Enter credentials</p>
        {error && !loading ?  <div className="error">
          
            <li >{error}</li>
       
        </div>:null }
        <form onSubmit={handleLogin} autoComplete="off">
          <div className="auth--form-input">
            <label>Email</label>
            <input type="text" name="email" onChange={handleChange} value={formData.email} required />
          </div>
          <div className="auth--form-input">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} value={formData.password} required />
          </div>
          
          { loading ?           <div className="loading">
            <p>Processing...</p>
          </div>:          <input
            className="auth--submit"
            type="submit"
            value="Log in account"
          /> }
        </form>
        <div className="auth--cta">
          <p>Don't have an account?</p>
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
}
