import React from 'react'
import MainPage from '../pages/MainPage';
import ApplyForm from '../pages/ApplyForm';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    <ErrorBoundary><RouterProvider router={router} /></ErrorBoundary>
  )
}
