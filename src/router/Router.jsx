import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../components/Main/Main';
import Home from '../components/FirstPage/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Checkout from '../components/Checkout/Checkout';
import Bookings from '../components/Bookings/Bookings';
import Private from './Private';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/bookings",
        element:<Private><Bookings></Bookings></Private>,
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
    ],
  },
]);

export default router;