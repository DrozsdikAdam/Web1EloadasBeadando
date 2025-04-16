import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import './main.css'
import { AppProvider } from './services/AppContext.jsx'
import { AuthProvider } from './services/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Header />
          <div className="app-container">
            <App />
          </div>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
