
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProductsDetails from './pages/ProductsDetails';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-products",
        element: <Products/>,
      },
      {
        path: "/products-Details",
        element: <ProductsDetails/>,
      },

      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },
]);




function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
