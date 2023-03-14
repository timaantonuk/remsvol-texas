import React from 'react'
import MainPage from '../pages/MainPage';
import ApplyForm from '../pages/ApplyForm';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

export const Routes = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainPage/>
        },
        {
            path: "/apply",
            element: <ApplyForm/>
          },
      ]);
  return (
    <RouterProvider router={router} />
  )
}
