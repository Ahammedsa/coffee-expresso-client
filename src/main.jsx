import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // C-2 fatch data from server  
    loader : () => fetch('http://localhost:5000/coffee') 

  },{
     path: "addCoffee" ,
     element : <AddCoffee></AddCoffee>
  } ,
  {
    path: "updateCoffee/:id" ,
    element : <UpdateCoffee></UpdateCoffee> ,
    loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}  ></RouterProvider>
  </React.StrictMode>,
)
