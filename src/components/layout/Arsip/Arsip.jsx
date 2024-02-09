import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import TabelDocument from "../Dokumen/TableDokumen";

const Arsip = () => {
  const location = useLocation();
  return (
    <div className="">
      <h1 className="text-[#5E5E5E] text-2xl font-bold">Arsip</h1>
      <div className="flex mt-[23px] justify-between">
        <div className="opacity-0 w-1 flex list-none bg-[#F6F8FF] rounded-[40px] py-4 text-[16px] 2xl:text-lg text-[#676F82] font-medium space-x-3"></div>
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="pl-10 pr-4 py-3 outline-none rounded-[40px] bg-[#F6F8FF]"
            onChange={(e) => handleChangeTable(e, location.pathname)}
          />
          <div className="absolute bottom inset-y-0 left-0 flex items-center pl-3">
            <CiSearch className="w-5 h-5 text-[#AEB8CF]" />
          </div>
        </div>
      </div>
      <TabelDocument />
    </div>
  );
};

export default Arsip;
