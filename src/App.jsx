import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardMonev from './pages/Monev/DashboardMonev';
import Dashboard from './pages/Monev/Dashboard';
import Monitoring from './pages/Monev/Monitoring';
import { Pengukuran } from './assets/icons';
import MonitoringTarget from './components/layout/Monitoring/MonitoringTarget';
import Identifikasi from './components/layout/Monitoring/Identifikasi';
import Sims from './components/layout/Monitoring/Sims';
import SimsJatim from './components/layout/Monitoring/SimsJatim';
import SimsMataram from './components/layout/Monitoring/SimsMataram';
import AddFrekuensi from './components/ui/AddFrekuensi';


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/",
    element: <DashboardMonev />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "monitoring",
        element: <Monitoring />,
        children: [
          {
            index: true,
            element: <MonitoringTarget />
          },
          {
            path: "identifikasi",
            element: <Identifikasi />
          },
          {
            path: "add",
            element: <AddFrekuensi />
          },
          {
            path: "sims",
            element: <Sims />,
            children: [
              {
                index: true,
                element: <SimsJatim />
              },
              {
                path: "mataram",
                element: <SimsMataram />
              }
            ]
          }
        ]
      },
      {
        path: "pengukuran",
        element: <Pengukuran />
      }
    ]
  }
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
