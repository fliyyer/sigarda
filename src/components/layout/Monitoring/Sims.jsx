import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Sims = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLinkActive = (to) => {
    return location.pathname === to;
  };

  const navigateTo = () => {
    console.log(location.pathname);
    if (location.pathname === "/monitoring/sims") {
      navigate("/monitoring/add-jatim");
    } else {
      navigate("/monitoring/add-mataram");
    }
  };

  return (
    <div>
      <div className="list-none gap-6 flex items-center pl-6 mt-[15px]">
        <NavLink
          to="/monitoring/sims"
          className={`cursor-pointer ${
            isLinkActive("/monitoring/sims")
              ? "text-main-color font-semibold underline"
              : ""
          }`}
        >
          SIMS Jatim
        </NavLink>
        <NavLink
          to="/monitoring/sims/mataram"
          className={`cursor-pointer ${
            isLinkActive("/monitoring/sims/mataram")
              ? "text-main-color font-semibold underline"
              : ""
          }`}
        >
          SIMS Mataram
        </NavLink>
        <button
          onClick={navigateTo}
          className="flex gap-2 text-sm items-center"
        >
          <span className="bg-main-color w-[32px] text-[18px] h-[32px] flex justify-center items-center rounded-full text-white">
            <FaPlus />
          </span>
          Tambah Data SIMS
        </button>
      </div>
      {/* Sims Jatim */}
      <Outlet />
    </div>
  );
};

export default Sims;
