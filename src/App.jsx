
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
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import Shop from './pages/Shop';

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
        element: <Shop/>,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails/>,
        loader:({params})=>fetch(`https://fakestoreapi.com/products/${params.id}`)
      },
    //   {
    //     path: '/propertie/:id',
    //     element: <ProDetails></ProDetails>,
    //     loader:({params})=>fetch(`http://localhost:4000/propertie/${params.id}`)
    // },
      {
        path: "/shoppingCart",
        element:<ShoppingCart></ShoppingCart>,
      },
      {
        path: "/checkout",
        element:<Checkout/>,
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
