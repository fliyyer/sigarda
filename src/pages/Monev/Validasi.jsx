import React, { createContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { identifikasi } from "../../utils/identifikasi";

export const InitMonitoringContext = createContext();

const ValidasiIsr = () => {
  const location = useLocation();
  const isLinkActive = (to) => {
    return location.pathname === to;
  };

  const isAddRoute = location.pathname === "/monitoring/add";

  const [tableIdentifikasi, setTableIdentifikasi] = useState(identifikasi.data);
  const [searchTable, setSearchTable] = useState("");

  const handleChangeTable = (e, currLocation) => {
    const { value } = e.target;
    setSearchTable(value);
    if (currLocation === "/monitoring/identifikasi") {
      const filteredIdentifikasi = identifikasi.data.filter(
        (v) =>
          v.client.toLowerCase().includes(value.toLowerCase()) ||
          v.service.toLowerCase().includes(value.toLowerCase()) ||
          v.subservis.toLowerCase().includes(value.toLowerCase()) ||
          v.kelasemisi.toLowerCase().includes(value.toLowerCase())
      );
      setTableIdentifikasi(filteredIdentifikasi);
    }
  };

  const ContextMonitoring = {
    identifikasiPage: {
      table: {
        value: tableIdentifikasi,
        setValue: setTableIdentifikasi,
      },
    },
  };

  return (
    <div className="">
      <h1 className="text-[#5E5E5E] text-2xl font-bold">Validasi ISR</h1>
      {!isAddRoute && (
        <div className="flex mt-[23px] justify-between">
          <div className="flex list-none bg-[#F6F8FF] rounded-[40px] py-4 px-[30px] text-[16px] 2xl:text-lg text-[#676F82] font-medium space-x-3">
            <Link
              to="/validasi"
              className={`cursor-pointer ${
                isLinkActive("/validasi")
                  ? "text-[#334158] font-semibold underline"
                  : ""
              }`}
            >
              Microwave Link
            </Link>
            <Link
              to="/validasi/non-link"
              className={`cursor-pointer ${
                isLinkActive("/validasi/non-link")
                  ? "text-[#334158] font-semibold underline"
                  : ""
              }`}
            >
              Non Microwave Link
            </Link>
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-3 outline-none rounded-[40px] bg-[#F6F8FF]"
              onChange={(e) => handleChangeTable(e, location.pathname)}
              value={searchTable}
            />
            <div className="absolute bottom-2 inset-y-0 left-0 flex items-center pl-3">
              <CiSearch className="w-5 h-5 text-[#AEB8CF]" />
            </div>
          </div>
        </div>
      )}
      <div>
        <InitMonitoringContext.Provider value={ContextMonitoring}>
          <Outlet />
        </InitMonitoringContext.Provider>
      </div>
    </div>
  );
};

export default ValidasiIsr;