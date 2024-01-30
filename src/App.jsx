import React from 'react'
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Main/MainPages/Dashboard';
import Main from './pages/Main/Main';
import Monitoring from './pages/Main/MainPages/Monitoring';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

const isLogin = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: isLogin ? <Main /> : <LoginPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "monitoring",
        element: <Monitoring />
      },
    ]
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  }
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
