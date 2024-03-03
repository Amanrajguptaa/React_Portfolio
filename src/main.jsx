import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Layout from './Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutRoute from './Components/AboutRoute/AboutRoute';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Connect from './Components/Connect/Connect';

const route=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<AboutRoute/>
      },
      {
        path:"contact",
        element:<Connect/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={route} />
  </React.StrictMode>,
)
