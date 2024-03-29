import React, { createContext, useEffect, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from 'react-router-dom';
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
import AddPerangkat from './components/ui/pelayanan/AddPerangkat';
import ListTamu from './components/layout/Tamu/ListTamu';
import AddTamu from './components/ui/tamu/AddTamu';
import FrekuensiAddPage from './components/layout/Monitoring/FrekuensiAddPage';
import AddSimsJatim from './components/layout/Monitoring/AddSimsJatim';
import AddSimsMataram from './components/layout/Monitoring/AddSimsMataram';
import AddPengukuran from './components/layout/Pengukuran/AddPengukuran';
import AddMicrowave from './components/ui/Validasi/AddMicrowave';
import AddNonMicrowave from './components/ui/Validasi/AddNonMicrowafe';
import AddUnar from './components/ui/pelayanan/AddUnar';
import ListUnar from './components/layout/Unar/ListUnar';
import DashboardSpt from './pages/SPT/DashboardSpt';
import Spt from './pages/SPT/Spt';
import ListSpt from './components/layout/Spt/ListSpt';
import { getUserLogin } from './services/api';
import TabelDocument from './components/layout/Dokumen/TableDokumen';
import TableTemplate from './components/layout/Dokumen/TableTemplate';
import AddSpt from './components/layout/Spt/AddSpt';
import Kepegawaian from './pages/SPT/Kepegawaian';
import AddPegawai from './components/layout/kepegawaian/AddKepegawaian';
import Arsip from './components/layout/Arsip/Arsip';
import AkunSpt from './pages/SPT/AkunSpt';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/',
    element: <DashboardMonev />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/monitoring',
        element: <Monitoring />,
        children: [
          {
            index: true,
            element: <MonitoringTarget />,
          },
          {
            path: 'identifikasi',
            element: <Identifikasi />,
          },
          {
            path: 'add',
            element: <FrekuensiAddPage />,
          },
          {
            path: 'add-jatim',
            element: <AddSimsJatim />,
          },
          {
            path: 'add-mataram',
            element: <AddSimsMataram />,
          },
          {
            path: 'sims',
            element: <Sims />,
            children: [
              {
                index: true,
                element: <SimsJatim />,
              },
              {
                path: 'mataram',
                element: <SimsMataram />,
              },
            ],
          },
        ],
      },
      {
        path: 'pengukuran',
        element: <Pengukuran />,
        children: [
          {
            path: 'add',
            element: <AddPengukuran />,
          },
        ],
      },
      {
        path: 'validasi',
        element: <ValidasiIsr />,
        children: [
          {
            index: true,
            element: <MicrowaveLink />,
          },
          {
            path: 'non-link',
            element: <MicrowaveNonLink />,
          },
          {
            path: 'add-microwave',
            element: <AddMicrowave />,
          },
          {
            path: 'add-non-microwave',
            element: <AddNonMicrowave />,
          },
        ],
      },
      {
        path: 'dokumen',
        element: <Dokumen />,
        children: [
          {
            index: true,
            element: <TabelDocument />,
          },
          {
            path: 'template',
            element: <TableTemplate />,
          },
        ],
      },
      {
        path: 'akun',
        element: <Akun />,
      },
    ],
  },
  {
    path: 'pelayanan',
    element: <DashboardPelayanan />,
    children: [
      {
        index: true,
        element: <DashboardPel />,
      },
      {
        path: 'dashboard',
        element: <DashboardPel />,
      },
      {
        path: 'perangkat',
        element: <Perangkat />,
        children: [
          {
            index: true,
            element: <PerangkatList />,
          },
          {
            path: 'peminjaman',
            element: <PeminjamanList />,
          },
          {
            path: 'add',
            element: <AddPerangkat />,
          },
          {
            path: '/pelayanan/perangkat/peminjaman/add-peminjaman',
            element: <AddPemimnjam />,
          },
        ],
      },
      {
        path: 'unar',
        element: <Unar />,
        children: [
          {
            index: true,
            element: <ListUnar />,
          },
          {
            path: 'add',
            element: <AddUnar />,
          },
        ],
      },
      {
        path: 'tamu',
        element: <Tamu />,
        children: [
          {
            index: true,
            element: <ListTamu />,
          },
          {
            path: 'add',
            element: <AddTamu />,
          },
        ],
      },
      {
        path: 'akun',
        element: <Akun />,
      },
    ],
  },
  {
    path: 'spt',
    element: <DashboardSpt />,
    children: [
      {
        index: true,
        element: <Spt />,
      },
      {
        path: 'add-spt',
        element: <AddSpt />,
      },
      {
        path: 'kepegawaian',
        element: <Kepegawaian />,
      },
      {
        path: 'add-pegawai',
        element: <AddPegawai />,
      },
      {
        path: 'arsip',
        element: <Arsip />,
      },
      {
        path: 'dokumen',
        element: <Dokumen linkTo={{ sop: 'sop', template: 'template' }} />,
        children: [
          {
            path: 'sop',
            element: <TabelDocument />,
          },
          {
            path: 'template',
            element: <TableTemplate />,
          },
        ],
      },
      {
        path: 'akun',
        element: <AkunSpt />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export const ProfileContext = createContext();

const App = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    setProfile(getUserLogin());
  }, []);
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <RouterProvider router={router} />
    </ProfileContext.Provider>
  );
};

export default App;
