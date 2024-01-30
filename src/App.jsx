import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardMonev from './pages/Monev/DashboardMonev';
import Dashboard from './pages/Monev/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardMonev />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  }
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
