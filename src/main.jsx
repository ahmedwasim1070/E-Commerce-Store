import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

import Home from './routes/Home'
import ProductPage from './routes/ProductPage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/product/:id' element={<ProductPage/>} />
      </Routes>
    </BrowserRouter>    
  </StrictMode>,
)
