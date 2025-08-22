import React from 'react'
import { BrowserRouter } from 'react-router-dom' 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ShopContext } from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContext.Provider>
      <App />
    </ShopContext.Provider>
  </BrowserRouter>

)
