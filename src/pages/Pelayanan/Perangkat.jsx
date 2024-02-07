import React, { createContext, useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import api from '../../services/api';

export const InitPerangkatContext = createContext();

const Perangkat = () => {
  const [tablePerangkat, setTablePerangkat] = useState([]);
  const location = useLocation();
  const isLinkActive = (to) => {
    return location.pathname === to;
  };

  const isAddRoute = location.pathname === '/pelayanan/perangkat/add';

  const [searchTable, setSearchTable] = useState('');

  const fetchTablePerangkat = async () => {
    try {
      const response = await api.get("/pelayanan_perangkat.php");
      setTablePerangkat(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const ContextPerangkat = {
    perangkatPage : {
      table: {
        value: !searchTable
          ? tablePerangkat
          : tablePerangkat.filter((v) =>
              v.client.toLowerCase().includes(searchTable.toLowerCase()) ||  v.service.toLowerCase().includes(searchTable.toLowerCase())
            ),
        setValue: setTablePerangkat,
      }
    }
  }

  useEffect(() => {
    fetchTablePerangkat()
  })

  return (
    <div>
      <h1 className="text-[#5E5E5E] text-2xl font-bold">Perangkat</h1>
        <div className="flex mt-[23px] justify-between">
          <div className="flex list-none bg-[#F6F8FF] rounded-[40px] py-4 px-[30px] text-[16px] 2xl:text-lg text-[#676F82] font-normal space-x-3">
            <Link
              to="/pelayanan/perangkat"
              className={`cursor-pointer ${
                isLinkActive('/pelayanan/perangkat' )
                  ? 'text-[#334158] font-semibold underline'
                  : ''
              }`}>
              Perangkat
            </Link>
            <Link
              to="peminjaman"
              className={`cursor-pointer ${
                isLinkActive('/pelayanan/perangkat/peminjaman')
                  ? 'text-[#334158] font-semibold underline'
                  : ''
              }`}>
              Peminjaman
            </Link>
          </div>
          {!isAddRoute && (
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
             )}
        </div>
   
      <div>
        <InitPerangkatContext.Provider value={ContextPerangkat}>
          <Outlet />
        </InitPerangkatContext.Provider>
      </div>
    </div>
  );
};

export default Perangkat;
