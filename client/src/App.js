/*import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/page/home/Home";
import Login from "./components/page/login/Login";
import Users from "./components/admin/user/Users";
import Single from "./components/page/single/Single";
import New from "./components/page/new/New";
import List from "./components/page/list/List";
import Products from "./components/admin/product/Products";
import Orders from "./components/admin/order/Orders"; 
import Delivery from "./components/admin/delivery/Delivery";
import './App.css';
import Services from './components/pages/services/Services';
import LandingPage from './components/pages/landing-page/LandingPage'
import LoginPage from './components/pages/auth/LoginPage'
import RegisterPage from './components/pages/auth/RegisterPage'
import ForgetPasswordPage from './components/pages/auth/ForgetPasswordPage'
import HomePage from './components/pages/homepage/HomePage'
import Cart from './components/cart/Cart';



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
          <Route path="/products">
            <Route index element={<List />} />
            <Route index element={<Products />} />
            <Route index element={<Orders />} />
            <Route index element={<Delivery />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;*/




/*import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Products from './components/pages/products/Product';
import Services from './components/pages/services/Services';
import LandingPage from './components/pages/landing-page/LandingPage'
import LoginPage from './components/pages/auth/LoginPage'
import RegisterPage from './components/pages/auth/RegisterPage'
import ForgetPasswordPage from './components/pages/auth/ForgetPasswordPage'
import HomePage from './components/pages/homepage/HomePage'




function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path='services' element={<Services />} />
            <Route path='products' element={<Products />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;*/


import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Products from "./components/products/Products";
import ProductDetail from './components/products/ProductDetails'
import Cart from './components/cart/Cart'
import './App.css';
import Services from './components/pages/services/Services';
import LandingPage from './components/pages/landing-page/LandingPage'
import LoginPage from './components/pages/auth/LoginPage'
import RegisterPage from './components/pages/auth/RegisterPage'
import ForgetPasswordPage from './components/pages/auth/ForgetPasswordPage'
import HomePage from './components/pages/homepage/HomePage'
import AdminHome from './components/adminpanel/pages/home/Home';
import Login from './components/adminpanel/pages/login/Login'


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
          <Route path="/login" component={Login} />
          <Route path="/admin" element={<AdminHome />} />
          

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




