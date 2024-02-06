import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import APIContextProvider from './context/APIContext.tsx';
import App from './App.tsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <APIContextProvider>
        <App />
      </APIContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
