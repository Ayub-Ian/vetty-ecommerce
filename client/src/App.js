import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Services from './components/pages/services/Services';
import LandingPage from './components/pages/landing-page/LandingPage'
import LoginPage from './components/pages/auth/LoginPage'
import RegisterPage from './components/pages/auth/RegisterPage'
import ForgetPasswordPage from './components/pages/auth/ForgetPasswordPage'
import HomePage from './components/pages/homepage/HomePage'
import ProductDetail from "./components/pages/products/ProductDetails";
import Products from "./components/pages/products/Products";
import Cart from "./components/pages/cart/Cart";


function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

