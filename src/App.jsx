
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';

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
        path: "/catalog",
        element: <Catalog></Catalog>,
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
