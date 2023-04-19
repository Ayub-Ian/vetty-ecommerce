import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Products from './components/products/Product';
import Services from './components/services/Services';

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'






function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* Add your routes here */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/home" element={<HomePage />} />
            
            <Route path="/home" element={<HomePage products={products} loading={loading} error={error} user={user} setUser={setUser} />} />
            <Route path="/product_items/:id" element={<Cart products={products} loading={loading} />} />


            <Route path='services' element={<Services />} />
            <Route path='products' element={<Products />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
