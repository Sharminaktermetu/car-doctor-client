import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../components/Main/Main';
import Home from '../components/FirstPage/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';

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
    ],
  },
]);

export default router;