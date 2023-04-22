import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Products from './components/pages/products/Product';
import Services from './components/pages/services/Services';
import LandingPage from './components/pages/landing-page/LandingPage'
import LoginPage from './components/pages/auth/LoginPage'
import RegisterPage from './components/pages/auth/RegisterPage'
import ForgetPasswordPage from './components/pages/auth/ForgetPasswordPage'
import HomePage from './components/pages/homepage/HomePage'
import Billing from './components/Billing/Billing';
 import Cart from './components/pages/products/Cart';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* Add your routes here */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/billing" element={<Billing/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<Cart/>}/>

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

export default App;
