import React from 'react'
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  }
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
