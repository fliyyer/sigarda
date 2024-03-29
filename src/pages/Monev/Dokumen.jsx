import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Dokumen = ({ linkTo = {} }) => {
  const { sop, template } = linkTo;
  const location = useLocation();
  const isLinkActive = (to) => {
    if (sop || template) {
      return location.pathname.includes(to);
    }
    return location.pathname === to;
  };
  return (
    <div className="">
      <ReactTooltip id="sop" place="bottom" />
      <ReactTooltip id="tem" place="bottom" />
      <h1 className="text-[#5E5E5E] text-2xl font-bold">Dokumen</h1>
      <div className="flex mt-[23px] justify-between overflow-auto">
        <div className="flex list-none bg-[#F6F8FF] rounded-[40px] py-4 px-[30px] text-[16px] 2xl:text-lg text-[#676F82] font-medium space-x-3">
          <Link
            data-tooltip-id="sop"
            data-tooltip-content="Menampilkan data SOP"
            to={sop ? sop : '/dokumen'}
            className={`cursor-pointer ${
              isLinkActive(sop ? sop : '/dokumen')
                ? 'text-[#334158] font-semibold underline'
                : ''
            }`}>
            SOP
          </Link>
          <Link
            data-tooltip-id="tem"
            data-tooltip-content="Menampilkan data Template"
            to={template ? template : '/dokumen/template'}
            className={`cursor-pointer ${
              isLinkActive(template ? template : '/dokumen/template')
                ? 'text-[#334158] font-semibold underline'
                : ''
            }`}>
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
  );
};

export default Dokumen;
