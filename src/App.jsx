import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardMonev from './pages/Monev/DashboardMonev';
import Dashboard from './pages/Monev/Dashboard';
import Monitoring from './pages/Monev/Monitoring';
import MonitoringTarget from './components/layout/Monitoring/MonitoringTarget';
import Identifikasi from './components/layout/Monitoring/Identifikasi';
import Sims from './components/layout/Monitoring/Sims';
import SimsJatim from './components/layout/Monitoring/SimsJatim';
import SimsMataram from './components/layout/Monitoring/SimsMataram';
import AddFrekuensi from './components/ui/AddFrekuensi';
import Pengukuran from './pages/Monev/Pengukuran';
import ValidasiIsr from './pages/Monev/Validasi';
import MicrowaveLink from './components/layout/ValidasiIsr/MicrowaveLink';
import MicrowaveNonLink from './components/layout/ValidasiIsr/MicrowaveNonLink';
import Dokumen from './pages/Monev/Dokumen';
import Akun from './pages/Monev/Akun';
import DashboardPelayanan from './pages/Pelayanan/DashboardPelayanan';
import DashboardPel from './pages/Pelayanan/Dashboard';
import Perangkat from './pages/Pelayanan/Perangkat';
import PerangkatList from './components/layout/Perangkat/PerangkatList';
import PeminjamanList from './components/layout/Perangkat/PeminjamanList';
import Unar from './pages/Pelayanan/Unar';
import Tamu from './pages/Pelayanan/Tamu';
import AddPemimnjam from './components/ui/pelayanan/AddPemimnjam';
import AddPerangkat from './components/ui/pelayanan/addPerangkat';
import ListTamu from './components/layout/Tamu/ListTamu';
import AddTamu from './components/ui/tamu/AddTamu';


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
      },
      {
        path: "validasi",
        element: <ValidasiIsr />,
        children: [
          {
            index: true,
            element: <MicrowaveLink />
          },
          {
            path: "non-link",
            element: <MicrowaveNonLink />
          }
        ]
      },
      {
        path: "dokumen",
        element: <Dokumen />
      },
      {
        path: "akun",
        element: <Akun />
      }
    ]
  },
  {
    path: "pelayanan",
    element: <DashboardPelayanan />,
    children: [
      {
        index: true,
        element: <DashboardPel />
      },
      {
        path: "dashboard",
        element: <DashboardPel />
      },
      {
        path: "perangkat",
        element: <Perangkat />,
        children: [
          {
            index: true,
            element: <PerangkatList />
          },
          {
            path: "peminjaman",
            element: <PeminjamanList />
          },
          {
            path: "add",
            element: <AddPerangkat />
          },
          {
            path: "/pelayanan/perangkat/peminjaman/add-peminjaman",
            element: <AddPemimnjam />
          }
        ]
      },
      {
        path: "unar",
        element: <Unar />
      },
      {
        path: "tamu",
        element: <Tamu />,
        children: [
          {
            index: true,
            element: <ListTamu />
          },
          {
            path: "add",
            element: <AddTamu />
          }
        ]
      },
      {
        path: "akun",
        element: <Akun />
      }
    ]
  }
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
