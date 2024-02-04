import React, { createContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import api from "../../services/api";


export const InitValiadsiContext = createContext();

const ValidasiIsr = () => {
  const location = useLocation();
  const isLinkActive = (to) => {
    return location.pathname === to;
  };

  const isAddRoute = ["/validasi/add-microwave", "/validasi/add-non-microwave"].includes(location.pathname);

  const [tableLink, setTableLink] = useState([]);
  const [tableNonLink, setTableNonLink] = useState([]);
  const [searchTable, setSearchTable] = useState("");

  const handleChangeTable = (e, currLocation) => {
    const { value } = e.target;
    setSearchTable(value);
  };

  const fetchTableLink = async () => {
    try {
      const response = await api.get("/microwave_link.php");
      setTableLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchTableNonLink = async () => {
    try {
      const response = await api.get("/microwave_non_link.php");
      setTableNonLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTableLink();
    fetchTableNonLink();
  }, [location])

  const ContextValidasi = {
    linkPage: {
      table: {
        value: !searchTable
          ? tableLink
          : tableLink.filter((v) =>
            v.client.toLowerCase().includes(searchTable.toLowerCase())
          ),
        setValue: setTableLink,
      },
    },
    nonLinkPage: {
      table: {
        value: !searchTable
          ? tableNonLink
          : tableNonLink.filter((v) =>
            v.client.toLowerCase().includes(searchTable.toLowerCase())
          ),
        setValue: setTableNonLink,
      },
    },
  }

  return (
    <div className="">
      <h1 className="text-[#5E5E5E] text-2xl font-bold">Validasi ISR</h1>
      {!isAddRoute && (
        <div className="flex mt-[23px] justify-between">
          <div className="flex list-none bg-[#F6F8FF] rounded-[40px] py-4 px-[30px] text-[16px] 2xl:text-lg text-[#676F82] font-medium space-x-3">
            <Link
              to="/validasi"
              className={`cursor-pointer ${isLinkActive("/validasi")
                ? "text-[#334158] font-semibold underline"
                : ""
                }`}
            >
              Microwave Link
            </Link>
            <Link
              to="/validasi/non-link"
              className={`cursor-pointer ${isLinkActive("/validasi/non-link")
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
        <InitValiadsiContext.Provider value={ContextValidasi}>
          <Outlet />
        </InitValiadsiContext.Provider>
      </div>
    </div>
  );
};

export default ValidasiIsr;
