import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import MyCard from './component/MyCard/MyCard.jsx';
import AddProduct from './component/AddProduct/AddProduct.jsx';
import UpdateShoes from './component/UpdateShoes.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:2000/brand')
        
      },
      
        {
          path:"/Mycard",
          element:<MyCard></MyCard>
        },
        {
          path:"/addProduct",
          element:<AddProduct></AddProduct>
        },
        {
          path:'updateShoes/:id',
          element:<UpdateShoes></UpdateShoes>,
          loader:({params})=>fetch(`http://localhost:2000/brand/${params.id}`)
        }
          
      ]
    
    }
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
