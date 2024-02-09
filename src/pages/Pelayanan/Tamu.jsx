import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Tamu = () => {
  const location = useLocation();
  const isLinkActive = (to) => {
    return location.pathname === to;
  };

  const isAddRoute = location.pathname === "/pelayanan/tamu/add";
  return (
    <div>
      <h1 className="text-[#5E5E5E] text-2xl font-bold">Buku Tamu</h1>
      <div className="flex mt-[23px] justify-between [@media(max-width:1000px)]:flex-wrap [@media(max-width:1000px)]:gap-y-6">
        <Link
          to="add"
          className="flex gap-2 hover:underline mt-[15px] text-sm pl-6 items-center"
        >
          <span className="bg-main-color w-[32px] text-[18px] h-[32px] flex justify-center items-center rounded-full text-white">
            <FaPlus />
          </span>
          Tambah Data
        </Link>
        {!isAddRoute && (
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-3 outline-none rounded-[40px] bg-[#F6F8FF]"
              onChange={(e) => handleChangeTable(e, location.pathname)}
            />
            <div className="absolute bottom-2 inset-y-0 left-0 flex items-center pl-3">
              <CiSearch className="w-5 mt-2 h-5 text-[#AEB8CF]" />
            </div>
          </div>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Tamu;
