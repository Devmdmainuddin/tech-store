import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import ProductContextProvider from './contexts/ProductContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ProductContextProvider>


  </React.StrictMode>,
)
