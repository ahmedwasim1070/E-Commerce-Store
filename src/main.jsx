import { StrictMode, useState, useEffect } from 'react'; 
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import { productData } from './data/Data';
import Home from './routes/Home';
import ProductPage from './routes/ProductPage';
import Cart from './routes/Cart';
import Products from './routes/Products';
import ContactPage from './routes/ContactPage';
import AboutPage from './routes/AboutPage';

function App() {
  const [idxPr, setIdxPr] = useState(0);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const savedCartData = localStorage.getItem('cartData');
    if (savedCartData) {
      setCartData(JSON.parse(savedCartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData]);

  const addToCart = (i) => {
    const itemToAdd = productData[i];
    const isRepeat = cartData.some(item => item.productId === itemToAdd.productId);
    if (!isRepeat) {
      setCartData([...cartData, itemToAdd]);
    }
  };

  const removeCart = (i) => {
    setCartData(cartData.filter((_, index) => index !== i));
  };

  return (
    <Routes>
      <Route 
        path='/' 
        element={<Home idxPr={idxPr} setIdxPr={setIdxPr} cartData={cartData} addToCart={addToCart} />} 
      />
      <Route path='/product/:id' element={<ProductPage cartData={cartData} />} />
      <Route path='/cart' element={<Cart cartData={cartData} removeCart={removeCart} />} />
      <Route path='/products' element={<Products cartData={cartData} />} />
      <Route path='/contact-us' element={<ContactPage cartData={cartData} />} />
      <Route path='/about-us' element={<AboutPage cartData={cartData} />} />
    </Routes>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>    
  </StrictMode>
);
