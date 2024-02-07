import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Dokumen = () => {
    const location = useLocation();
  const isLinkActive = (to) => {
    return location.pathname === to;
  };
  return (
    <div className="">
      <h1 className="text-[#5E5E5E] text-2xl font-bold">Dokumen</h1>
      <div className="flex mt-[23px] justify-between">
          <div className="flex list-none bg-[#F6F8FF] rounded-[40px] py-4 px-[30px] text-[16px] 2xl:text-lg text-[#676F82] font-medium space-x-3">
            <Link
              to="/dokumen"
              className={`cursor-pointer ${
                isLinkActive("/dokumen")
                  ? "text-[#334158] font-semibold underline"
                  : ""
              }`}
            >
              SOP
            </Link>
            <Link
              to="/dokumen/template"
              className={`cursor-pointer ${
                isLinkActive("/dokumen/template")
                  ? "text-[#334158] font-semibold underline"
                  : ""
              }`}
            >
              Template
            </Link>
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-3 outline-none rounded-[40px] bg-[#F6F8FF]"
              onChange={(e) => handleChangeTable(e, location.pathname)}
            />
            <div className="absolute bottom-2 inset-y-0 left-0 flex items-center pl-3">
              <CiSearch className="w-5 h-5 text-[#AEB8CF]" />
            </div>
          </div>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Dokumen