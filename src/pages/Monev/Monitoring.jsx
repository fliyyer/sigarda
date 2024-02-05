import React, { createContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import api from "../../services/api";

export const InitMonitoringContext = createContext();

const Monitoring = () => {
  const location = useLocation();
  const isLinkActive = (to) => {
    return location.pathname === to;
  };

  const isAddRoute = [
    "/monitoring/add",
    "/monitoring/add-jatim",
    "/monitoring/add-mataram",
  ].includes(location.pathname);

  const [tableIdentifikasi, setTableIdentifikasi] = useState([]);
  const [tableJatim, setTableJatim] = useState([]);
  const [tableMataram, setTableMataram] = useState([]);
  const [searchTable, setSearchTable] = useState("");

  const handleChangeTable = (e, currLocation) => {
    const { value } = e.target;
    setSearchTable(value);
  };

  const ContextMonitoring = {
    identifikasiPage: {
      table: {
        value: !searchTable
          ? tableIdentifikasi
          : tableIdentifikasi.filter((v) =>
            v.client.toLowerCase().includes(searchTable.toLowerCase()) ||  v.service.toLowerCase().includes(searchTable.toLowerCase())
          ),
        setValue: setTableIdentifikasi,
      },
    },
    jatimPage: {
      table: {
        value: !searchTable
          ? tableJatim
          : tableJatim.filter((v) =>
          v.client.toLowerCase().includes(searchTable.toLowerCase()) ||  v.service.toLowerCase().includes(searchTable.toLowerCase())
          ),
        setValue: setTableJatim,
      },
    },
    mataramPage: {
      table: {
        value: !searchTable
          ? tableMataram
          : tableMataram.filter((v) =>
          v.client.toLowerCase().includes(searchTable.toLowerCase()) ||  v.service.toLowerCase().includes(searchTable.toLowerCase())
          ),
        setValue: setTableMataram,
      },
    },
  };

  const fetchTableFrekuensi = async () => {
    try {
      const response = await api.get("/identifikasi.php");
      setTableIdentifikasi(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTableSimsJatim = async () => {
    try {
      const response = await api.get("/sims_jatim.php");
      setTableJatim(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTableSimsMataram = async () => {
    try {
      const response = await api.get("/sims_mataram.php");
      setTableMataram(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTableFrekuensi();
    fetchTableSimsJatim();
    fetchTableSimsMataram()
  }, [location]);

  return (
    <div className="">
      <h1 className="text-[#5E5E5E] text-2xl font-bold">Monitoring</h1>
      {!isAddRoute && (
        <div className="flex mt-[23px] justify-between">
          <div className="flex list-none bg-[#F6F8FF] rounded-[40px] py-4 px-[30px] text-[16px] 2xl:text-lg text-[#676F82] font-medium space-x-3">
            <Link
              to="/monitoring"
              className={`cursor-pointer ${isLinkActive("/monitoring")
                  ? "text-[#334158] font-semibold underline"
                  : ""
                }`}
            >
              Target
            </Link>
            <Link
              to="/monitoring/identifikasi"
              className={`cursor-pointer ${isLinkActive("/monitoring/identifikasi")
                  ? "text-[#334158] font-semibold underline"
                  : ""
                }`}
            >
              Identifikasi
            </Link>
            <Link
              to="/monitoring/sims"
              className={`cursor-pointer ${isLinkActive("/monitoring/sims") ||
                  isLinkActive("/monitoring/sims/mataram")
                  ? "text-[#334158] font-semibold underline"
                  : ""
                }`}
            >
              SIMS
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

export default Monitoring;
