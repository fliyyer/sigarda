import React from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Sims = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLinkActive = (to) => {
    return location.pathname === to;
  };

  const navigateTo = () => {
    if (location.pathname === '/monitoring/sims') {
      navigate('/monitoring/add-jatim');
    } else {
      navigate('/monitoring/add-mataram');
    }
  };

  return (
    <div>
      <div className="list-none gap-6 flex items-center pl-6 mt-[15px]">
        <Link
          data-tooltip-id="jatim"
          data-tooltip-content="Menampilkan Data Sims Jatim"
          to="/monitoring/sims"
          className={`cursor-pointer ${
            isLinkActive('/monitoring/sims')
              ? 'text-main-color font-semibold underline'
              : ''
          }`}>
          SIMS Jatim
        </Link>
        <NavLink
          data-tooltip-id="mataram"
          data-tooltip-content="Menampilkan Data SIMS Mataram"
          to="/monitoring/sims/mataram"
          className={`cursor-pointer ${
            isLinkActive('/monitoring/sims/mataram')
              ? 'text-main-color font-semibold underline'
              : ''
          }`}>
          SIMS Mataram
        </NavLink>
        <button
          data-tooltip-id="tambah"
          data-tooltip-content="Menambah Data SIMS"
          onClick={navigateTo}
          className="flex gap-2 text-sm items-center">
          <span className="bg-main-color w-[32px] text-[18px] h-[32px] flex justify-center items-center rounded-full text-white">
            <FaPlus />
          </span>
          Tambah Data SIMS
        </button>
        <ReactTooltip id="jatim" style={{ width: 'auto' }} place="bottom" />
        <ReactTooltip id="mataram" style={{ width: 'auto' }} place="bottom" />
        <ReactTooltip id="tambah" style={{ width: 'auto' }} place="right" />
      </div>
      <Outlet />
    </div>
  );
};

export default Sims;
