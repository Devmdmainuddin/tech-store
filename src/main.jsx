import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import ProductContextProvider from './contexts/ProductContextProvider.jsx'
import { Provider } from 'react-redux'
import{ store} from './redux/store/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ProductContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ProductContextProvider>
    </Provider>
    


  </React.StrictMode>,
)
