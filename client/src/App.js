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

// admin imports 
import AdminProducts from "./components/pages/admin/products/Products";
import AdminHome from "./components/pages/admin/home/Home";
import AdminOrders from "./components/pages/admin/orders/Orders";
import AdminServices from './components/pages/admin/services/Services'
import Billing from "./components/pages/billing/Billing";




function App() {
  return (
    <BrowserRouter>
      <div>
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
          <Route path="/billing" element={<Billing />} />

          {/* admin routes   */}
          <Route path="admin/products" element={<AdminProducts />} />
          <Route path="admin/services" element={<AdminServices />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route path="admin/home" element={<AdminHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

