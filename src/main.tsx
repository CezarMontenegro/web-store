import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import APIContextProvider from './context/APIContext.tsx';
import CartContextProvider from './context/CartContext.tsx';
import App from './App.tsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <APIContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </APIContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
