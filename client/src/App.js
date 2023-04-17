import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Products from './components/products/Products';
import Services from './components/services/Services';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* Add your routes here */}
        <Route path='services' element={<Services />} />
        <Route path='products' element={<Products />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
